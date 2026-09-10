<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 40 40" 
    fill="none"
    class="select-none inline-block shrink-0"
  >
    <defs>
      <!-- Thread Primary Gradient (Indigo to Violet) -->
      <linearGradient id="kl-mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" />
        <stop offset="100%" stop-color="#8b5cf6" />
      </linearGradient>
    </defs>

    <!-- Minimalist Rounded Badge -->
    <rect width="40" height="40" rx="10" fill="#18181b" />
    <rect width="39" height="39" x="0.5" y="0.5" rx="9.5" stroke="rgba(255, 255, 255, 0.12)" />

    <!-- Minimalist Woven 'K' Monogram -->
    <!-- 1. Vertical Thread Stem -->
    <line 
      x1="13" 
      y1="10" 
      x2="13" 
      y2="30" 
      stroke="url(#kl-mark-gradient)" 
      stroke-width="3.5" 
      stroke-linecap="round" 
    />

    <!-- 2. Upper Diagonal Arm -->
    <path 
      d="M 28 11 L 14 21" 
      stroke="url(#kl-mark-gradient)" 
      stroke-width="3.5" 
      stroke-linecap="round" 
    />

    <!-- 3. Lower Diagonal Arm (Weaving Under with Coral Accent) -->
    <path 
      d="M 19 19 L 28 29" 
      stroke="#ff6b4a" 
      stroke-width="3.5" 
      stroke-linecap="round" 
    />
  </svg>
</template>
