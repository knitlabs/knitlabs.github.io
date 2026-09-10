<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 40 40" 
    fill="none"
    class="select-none inline-block shrink-0"
  >
    <defs>
      <!-- Thread Primary Gradient (Indigo to Violet) -->
      <linearGradient id="kl-mark-gradient" x1="13" y1="10" x2="28" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#6366f1" />
        <stop offset="100%" stop-color="#8b5cf6" />
      </linearGradient>
    </defs>

    <!-- Minimalist Woven Mark -->
    <!-- 1. Upper Diagonal Arm -->
    <path 
      d="M 28 11 L 14 21" 
      stroke="url(#kl-mark-gradient)" 
      stroke-width="3.5" 
      stroke-linecap="round" 
    />

    <!-- 2. Lower Diagonal Arm (Weaving Under with Coral Accent) -->
    <path 
      d="M 19 19 L 28 29" 
      stroke="#ff6b4a" 
      stroke-width="3.5" 
      stroke-linecap="round" 
    />
  </svg>
</template>
