<template>
  <svg 
    class="pointer-events-none absolute inset-0 z-0 w-full h-full"
    :viewBox="`0 0 ${viewportWidth} ${docHeight}`"
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
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1440);
const docHeight = ref(typeof window !== 'undefined' ? document.documentElement.scrollHeight : 3000);
const pathD = ref('');
const waypoints = ref([]);

const threadPathRef = ref(null);
const glowPathRef = ref(null);

let ctx = null;
let resizeTimeout = null;

// Calculate bezier curve waypoints based directly on registered eyelet elements
const calculateWaypoints = () => {
  if (typeof window === 'undefined') return;

  const currentScrollY = window.scrollY || window.pageYOffset || 0;
  const currentScrollX = window.scrollX || window.pageXOffset || 0;
  
  viewportWidth.value = window.innerWidth;
  docHeight.value = Math.max(
    document.documentElement.scrollHeight, 
    document.body.scrollHeight,
    window.innerHeight
  );

  // Pin eyelets embedded directly on cards, sections, and footer
  const pinElements = Array.from(document.querySelectorAll('[data-thread-pin], [data-thread-target="footer-spool"]'));
  if (pinElements.length === 0) return;

  const rawPins = [];
  let footerPoint = null;

  // Calculate pixel-exact absolute document centers of every eyelet pin
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
        rawPins.push(pt);
      }
    }
  });

  // Group intermediate pins into rows (pins within 60px vertically belong to the same row)
  rawPins.sort((a, b) => a.y - b.y);
  const rowBuckets = [];

  for (const pt of rawPins) {
    const existingRow = rowBuckets.find(row => Math.abs(row[0].y - pt.y) < 60);
    if (existingRow) {
      existingRow.push(pt);
    } else {
      rowBuckets.push([pt]);
    }
  }

  // Sort rows vertically top-to-bottom
  rowBuckets.sort((a, b) => a[0].y - b[0].y);

  // Natural serpentine weave (boustrophedon):
  // Even rows traverse left-to-right, odd rows traverse right-to-left.
  // This turns gracefully at the edge instead of cutting diagonally across the screen.
  const orderedIntermediate = [];
  rowBuckets.forEach((row, rowIndex) => {
    if (rowIndex % 2 === 0) {
      row.sort((a, b) => a.x - b.x);
    } else {
      row.sort((a, b) => b.x - a.x);
    }
    orderedIntermediate.push(...row);
  });

  if (orderedIntermediate.length === 0) return;

  // Top origin point gracefully aligned above the first eyelet
  const firstPt = orderedIntermediate[0];
  const points = [
    {
      x: firstPt.x,
      y: Math.max(30, firstPt.y - 90)
    },
    ...orderedIntermediate
  ];

  // Terminate thread at the footer spool knot
  if (footerPoint) {
    points.push(footerPoint);
  }

  waypoints.value = points;

  // Build continuous, organic yarn spline through waypoints with C1 continuity (zero sharp kinks or bends)
  const n = points.length;
  if (n < 2) return;

  const smoothness = 0.32; // Organic yarn drape tension factor

  // 1. Calculate chord vectors and distances
  const chordDirs = [];
  const chordLens = [];
  for (let i = 0; i < n - 1; i++) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    const dist = Math.hypot(dx, dy);
    chordLens.push(dist);
    if (dist > 0.001) {
      chordDirs.push({ x: dx / dist, y: dy / dist });
    } else {
      chordDirs.push({ x: 0, y: 1 });
    }
  }

  // 2. Calculate continuous tangent vector at each waypoint
  const tangents = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      // Flow along initial downward chord
      tangents.push(chordDirs[0]);
    } else if (i === n - 1) {
      // Enter final knot smoothly from above
      tangents.push({ x: 0, y: 1 });
    } else {
      // Bisect incoming and outgoing chords for seamless, continuous curvature
      const vIn = chordDirs[i - 1];
      const vOut = chordDirs[i];
      const tx = vIn.x + vOut.x;
      const ty = vIn.y + vOut.y;
      const tLen = Math.hypot(tx, ty);
      if (tLen > 0.001) {
        tangents.push({ x: tx / tLen, y: ty / tLen });
      } else {
        tangents.push(vOut);
      }
    }
  }

  // 3. Construct smooth cubic Bezier path
  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  const margin = 24;
  const maxW = viewportWidth.value - margin;

  for (let i = 0; i < n - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dist = chordLens[i];
    const arm = dist * smoothness;

    const t0 = tangents[i];
    const t1 = tangents[i + 1];

    let cp1x = p0.x + t0.x * arm;
    let cp1y = p0.y + t0.y * arm;
    let cp2x = p1.x - t1.x * arm;
    let cp2y = p1.y - t1.y * arm;

    // Clamp control point X coordinates to stay within visible page margins
    cp1x = Math.max(margin, Math.min(maxW, cp1x));
    cp2x = Math.max(margin, Math.min(maxW, cp2x));

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
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
        scrub: true // Lock synchronously to scroll position: zero lag, zero phantom drift
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

const debouncedResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    refreshThread();
  }, 100);
};

onMounted(() => {
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
  window.removeEventListener('resize', debouncedResize);
});
</script>
