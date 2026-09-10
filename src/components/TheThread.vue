<template>
  <svg 
    class="pointer-events-none fixed inset-0 z-0 w-full h-full"
    :viewBox="`0 0 ${viewportWidth} ${viewportHeight}`"
    preserveAspectRatio="none"
  >
    <defs>
      <!-- Thread Primary Gradient (Indigo -> Violet -> Coral -> Amber) -->
      <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" />
        <stop offset="40%" stop-color="#8b5cf6" />
        <stop offset="75%" stop-color="#ff6b4a" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>

      <!-- Glow Filter -->
      <filter id="threadGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Moving Group Synced to Viewport Scroll -->
    <g :transform="`translate(0, ${-scrollY})`">
      <!-- Glow ambient background path -->
      <path 
        ref="glowPathRef"
        :d="pathD"
        fill="none"
        stroke="rgba(99, 102, 241, 0.4)"
        stroke-width="7"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#threadGlow)"
        class="opacity-75"
      />

      <!-- Primary Crisp Thread Path -->
      <path 
        ref="threadPathRef"
        :d="pathD"
        fill="none"
        stroke="url(#threadGradient)"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
      />
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1440);
const viewportHeight = ref(typeof window !== 'undefined' ? window.innerHeight : 900);
const scrollY = ref(0);
const pathD = ref('');
const waypoints = ref([]);

const threadPathRef = ref(null);
const glowPathRef = ref(null);

let ctx = null;
let scrollTicking = false;
let resizeTimeout = null;

// Synchronize SVG group vertical translation with scroll
const onScroll = () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY || window.pageYOffset || 0;
      scrollTicking = false;
    });
    scrollTicking = true;
  }
};

// Calculate bezier curve waypoints based directly on registered eyelet elements
const calculateWaypoints = () => {
  if (typeof window === 'undefined') return;

  const currentScrollY = window.scrollY || window.pageYOffset || 0;
  const currentScrollX = window.scrollX || window.pageXOffset || 0;
  
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;

  // Pin eyelets embedded directly on cards, sections, and footer
  const pinElements = Array.from(document.querySelectorAll('[data-thread-pin], [data-thread-target="footer-spool"]'));
  if (pinElements.length === 0) return;

  const intermediatePoints = [];
  let footerPoint = null;

  // Top origin point above hero
  const points = [{
    x: viewportWidth.value * 0.5,
    y: 70
  }];

  // Calculate pixel-exact centers of every eyelet pin
  pinElements.forEach((pin) => {
    const rect = pin.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const isFooter = pin.getAttribute('data-thread-target') === 'footer-spool' || 
                       pin.getAttribute('data-thread-pin') === 'footer-spool';
      
      const pt = {
        x: rect.left + currentScrollX + rect.width / 2,
        y: rect.top + currentScrollY + rect.height / 2
      };

      if (isFooter) {
        footerPoint = pt;
      } else {
        intermediatePoints.push(pt);
      }
    }
  });

  // Stable sort: by row vertically, and left-to-right horizontally within each row
  intermediatePoints.sort((a, b) => {
    if (Math.abs(a.y - b.y) < 40) {
      return a.x - b.x;
    }
    return a.y - b.y;
  });

  points.push(...intermediatePoints);

  // Always terminate thread at the footer spool knot
  if (footerPoint) {
    points.push(footerPoint);
  }

  waypoints.value = points;

  // Build smooth bezier curves through waypoints
  if (points.length < 2) return;

  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dy = p1.y - p0.y;
    const dx = p1.x - p0.x;

    if (Math.abs(dy) < 50 && Math.abs(dx) > 30) {
      // Natural horizontal yarn drape between cards in the same row
      const sag = Math.min(50, Math.abs(dx) * 0.18);
      const cp1x = p0.x + dx * 0.35;
      const cp1y = p0.y + sag;
      const cp2x = p0.x + dx * 0.65;
      const cp2y = p1.y + sag;
      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
    } else {
      // Natural vertical S-drape curve between sections and vertical cards
      const cp1x = p0.x;
      const cp1y = p0.y + Math.max(35, dy * 0.45);
      const cp2x = p1.x;
      const cp2y = p1.y - Math.max(35, dy * 0.45);
      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
    }
  }

  pathD.value = d;
};

// Initialize or update GSAP ScrollTrigger scrubbing
const initScrollScrubber = () => {
  if (!threadPathRef.value) return;

  const path = threadPathRef.value;
  const glow = glowPathRef.value;
  const length = path.getTotalLength();

  if (length === 0) return;

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  if (glow) {
    glow.style.strokeDasharray = `${length}`;
    glow.style.strokeDashoffset = `${length}`;
  }

  ctx?.revert();

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5
      }
    });

    // The thread finishes drawing to the final knot as the footer scrolls into view (~88% of page scroll)
    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'power1.out',
      duration: 0.88
    }, 0);

    if (glow) {
      tl.to(glow, {
        strokeDashoffset: 0,
        ease: 'power1.out',
        duration: 0.88
      }, 0);
    }
  });

  ScrollTrigger.refresh();
};

const refreshThread = () => {
  calculateWaypoints();
  nextTick(() => {
    initScrollScrubber();
  });
};

const debouncedResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    refreshThread();
  }, 100);
};

onMounted(() => {
  scrollY.value = window.scrollY || window.pageYOffset || 0;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', debouncedResize, { passive: true });

  // Refresh thread after fonts and layout settle
  nextTick(() => {
    setTimeout(refreshThread, 60);
    setTimeout(refreshThread, 300);
  });
  
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshThread);
  }
});

onUnmounted(() => {
  ctx?.revert();
  clearTimeout(resizeTimeout);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', debouncedResize);
});
</script>
