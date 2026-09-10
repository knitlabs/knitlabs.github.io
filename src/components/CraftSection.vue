<template>
  <section id="craft" class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-amber-400 mb-4 shadow-glass">
        <Terminal class="w-3.5 h-3.5" />
        METHODOLOGY &amp; PHILOSOPHY
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
        Our <span class="bg-gradient-to-r from-amber-400 via-coral to-indigo-400 bg-clip-text text-transparent">Craft</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
        Software is not merely assembled; it is spun, tensioned, and woven into resilient digital tapestries.
      </p>
    </div>

    <!-- 3-Step Narrative Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Step 1: The Thread -->
      <div 
        data-thread-target="craft-thread"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-glass-hover"
      >
        <!-- Ambient hover glow -->
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>

        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold tracking-wider">
              ACT 01
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Sparkles class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
            The Thread
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            Atomic intent and raw signals. We deconstruct problems into pure data primitives, user workflows, and algorithmic contracts before writing a single line of state.
          </p>
        </div>

        <ul class="space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Domain-driven schema drafting
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Telemetry &amp; event signal capture
          </li>
        </ul>
      </div>

      <!-- Step 2: The Weave -->
      <div 
        data-thread-target="craft-weave"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-glass-hover"
      >
        <!-- Ambient hover glow -->
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-500/20 transition-all"></div>

        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-semibold tracking-wider">
              ACT 02
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Activity class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
            The Weave
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            Architecture and reactive state engines. Threads interlace through typed pipelines, modular event busses, and resilient synchronous bridges.
          </p>
        </div>

        <ul class="space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Composition API micro-frontends
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Zero-latency reactive states
          </li>
        </ul>
      </div>

      <!-- Step 3: The Fabric -->
      <div 
        data-thread-target="craft-fabric"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-glass-hover"
      >
        <!-- Ambient hover glow -->
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all"></div>

        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-wider">
              ACT 03
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Terminal class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
            The Fabric
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            Production, motion, and tactile execution. The software takes physical form on the screen — fluid, 60fps spring transitions, glassmorphic optics, and bulletproof uptime.
          </p>
        </div>

        <ul class="space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Sub-millisecond compositor passes
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Living design token systems
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, Activity, Terminal } from 'lucide-vue-next';
</script>
