<template>
  <section class="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10">
    <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
      
      <!-- Glassmorphic Hero Pill -->
      <div 
        data-thread-target="hero-pill"
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-mono text-indigo-300 shadow-glass mb-8 hover:border-indigo-500/40 transition-all duration-300 group cursor-default"
      >
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span class="tracking-wide">KNITLABS // ARCHITECTURE &amp; DIGITAL NARRATIVES</span>
        <Sparkles class="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
        Knitting stories with <br class="hidden sm:inline" />
        <span class="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]">
          code &amp; silicon.
        </span>
      </h1>

      <!-- Mission Statement -->
      <p class="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
        We architect resilient digital platforms and expressive software artifacts. From low-level telemetry to fluid user interfaces, every system is woven with purposeful algorithmic craft.
      </p>

      <!-- Dual CTAs -->
      <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a 
          href="#artifacts"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] border border-indigo-400/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <Sparkles class="w-4 h-4" />
          <span>Explore Artifacts</span>
        </a>

        <a 
          href="#craft"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 shadow-glass"
        >
          <Terminal class="w-4 h-4 text-amber-400" />
          <span>Our Craft</span>
        </a>
      </div>

      <!-- Ambient Metrics / Subtext Bar -->
      <div class="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-white/5 w-full max-w-xl text-center">
        <div>
          <div class="text-xl sm:text-2xl font-bold font-mono text-white">100%</div>
          <div class="text-xs text-slate-400 font-mono mt-0.5 uppercase tracking-wider">Zero-Code Scalable</div>
        </div>
        <div>
          <div class="text-xl sm:text-2xl font-bold font-mono text-indigo-400">60 FPS</div>
          <div class="text-xs text-slate-400 font-mono mt-0.5 uppercase tracking-wider">Spring Motion</div>
        </div>
        <div>
          <div class="text-xl sm:text-2xl font-bold font-mono text-amber-400">VUE 3</div>
          <div class="text-xs text-slate-400 font-mono mt-0.5 uppercase tracking-wider">Modern Core</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, Terminal } from 'lucide-vue-next';
</script>
