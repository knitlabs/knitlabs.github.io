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
        class="opacity-75 transition-opacity"
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
        class="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
      />

      <!-- Decorative Waypoint Knot Rings -->
      <g v-for="(wp, index) in waypoints" :key="index">
        <circle 
          :cx="wp.x" 
          :cy="wp.y" 
          r="4" 
          fill="#121317" 
          stroke="url(#threadGradient)" 
          stroke-width="2" 
          class="drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
        />
        <circle 
          :cx="wp.x" 
          :cy="wp.y" 
          r="1.5" 
          fill="#f8fafc" 
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const viewportWidth = ref(window.innerWidth || 1440);
const viewportHeight = ref(window.innerHeight || 900);
const scrollY = ref(0);
const pathD = ref('');
const waypoints = ref([]);

const threadPathRef = ref(null);
const glowPathRef = ref(null);

let ctx = null;
let resizeObserver = null;
let mutationObserver = null;
let scrollTicking = false;

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

// Calculate bezier curve waypoints based on registered target elements
const calculateWaypoints = () => {
  const currentScrollY = window.scrollY || window.pageYOffset || 0;
  const currentScrollX = window.scrollX || window.pageXOffset || 0;
  
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;

  const targetElements = Array.from(document.querySelectorAll('[data-thread-target]'));
  if (targetElements.length === 0) return;

  const points = [];

  // Top entry point near hero
  points.push({
    x: viewportWidth.value * 0.5,
    y: 80
  });

  // Calculate waypoints from DOM targets
  targetElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const absX = rect.left + currentScrollX;
    const absY = rect.top + currentScrollY;

    // Anchor calculation depending on element type
    const targetType = el.getAttribute('data-thread-target');
    let wpX = absX + rect.width / 2;
    let wpY = absY + rect.height / 2;

    if (targetType === 'hero-pill') {
      wpX = absX + rect.width / 2;
      wpY = absY + rect.height;
    } else if (targetType === 'footer-spool') {
      wpX = absX + rect.width / 2;
      wpY = absY + rect.height / 2;
    } else if (rect.width > 260) {
      // For project cards & craft cards, weave through the top left anchor pin
      wpX = absX + Math.min(42, rect.width * 0.15);
      wpY = absY + 2;
    }

    points.push({ x: wpX, y: wpY });
  });

  // Sort points primarily by vertical flow
  points.sort((a, b) => a.y - b.y);

  waypoints.value = points;

  // Build smooth bezier curves through waypoints
  if (points.length < 2) return;

  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dy = p1.y - p0.y;
    const dx = p1.x - p0.x;

    if (dy < 40 && Math.abs(dx) > 20) {
      // Lateral sag curve when cards are in the same grid row
      const sag = Math.min(70, Math.abs(dx) * 0.22);
      const cp1x = p0.x + dx * 0.3;
      const cp1y = p0.y + sag;
      const cp2x = p0.x + dx * 0.7;
      const cp2y = p1.y + sag;
      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
    } else {
      // Natural vertical S-drape curve
      const cp1x = p0.x;
      const cp1y = p0.y + Math.max(30, dy * 0.45);
      const cp2x = p1.x;
      const cp2y = p1.y - Math.max(30, dy * 0.45);
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

  // Set initial stroke-dasharray and stroke-dashoffset
  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  if (glow) {
    glow.style.strokeDasharray = `${length}`;
    glow.style.strokeDashoffset = `${length}`;
  }

  // Recreate GSAP timeline inside context
  ctx?.revert();

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      duration: 1
    }, 0);

    if (glow) {
      tl.to(glow, {
        strokeDashoffset: 0,
        ease: 'none',
        duration: 1
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

onMounted(() => {
  scrollY.value = window.scrollY || window.pageYOffset || 0;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', refreshThread, { passive: true });

  // Initial calculation after layout settles
  nextTick(() => {
    setTimeout(refreshThread, 100);
    setTimeout(refreshThread, 400);
  });

  // Watch for DOM mutations (e.g. projects appended dynamically)
  mutationObserver = new MutationObserver(() => {
    refreshThread();
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // Watch for element resizes
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(() => {
      refreshThread();
    });
    resizeObserver.observe(document.body);
  }
});

onUnmounted(() => {
  // Clean up ScrollTriggers via ctx.revert()
  ctx?.revert();
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', refreshThread);
  mutationObserver?.disconnect();
  resizeObserver?.disconnect();
});
</script>
