<template>
  <section id="philosophy" class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-amber-400 mb-4 shadow-glass">
        <Terminal class="w-3.5 h-3.5" />
        OUR PHILOSOPHY
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
        How We <span class="bg-gradient-to-r from-amber-400 via-coral to-indigo-400 bg-clip-text text-transparent">Build</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
        We believe useful software is crafted with patience, empathy, and genuine care for the people who use it.
      </p>
    </div>

    <!-- 3-Step Narrative Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Step 1: Curiosity & Need -->
      <div 
        data-thread-target="craft-thread"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-glass-hover"
      >
        <!-- Thread Pin Eyelet -->
        <div 
          data-thread-pin
          class="absolute -top-2 left-8 w-4 h-4 rounded-full bg-[#121317] border-2 border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.9)] z-20 flex items-center justify-center group-hover:scale-110 transition-all"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-indigo-200"></div>
        </div>

        <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold tracking-wider">
              PILLAR 01
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Sparkles class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
            Curiosity &amp; Need
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            Every product begins with a real question: Is this something we wish existed? We pick projects because they solve genuine pain points or explore meaningful ideas.
          </p>
        </div>

        <ul class="relative z-10 space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Building tools we use every day
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Focused utility over unnecessary features
          </li>
        </ul>
      </div>

      <!-- Step 2: Thoughtful Engineering -->
      <div 
        data-thread-target="craft-weave"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-glass-hover"
      >
        <!-- Thread Pin Eyelet -->
        <div 
          data-thread-pin
          class="absolute -top-2 left-8 w-4 h-4 rounded-full bg-[#121317] border-2 border-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)] z-20 flex items-center justify-center group-hover:scale-110 transition-all"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-violet-200"></div>
        </div>

        <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-semibold tracking-wider">
              PILLAR 02
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
              <Activity class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
            Thoughtful Engineering
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            We sweat the small details. Clean code, fast load times, and intuitive interactions make products feel natural and effortless to use.
          </p>
        </div>

        <ul class="relative z-10 space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Simple, maintainable foundations
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Polished and accessible interactions
          </li>
        </ul>
      </div>

      <!-- Step 3: Building in the Open -->
      <div 
        data-thread-target="craft-fabric"
        class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-glass-hover"
      >
        <!-- Thread Pin Eyelet -->
        <div 
          data-thread-pin
          class="absolute -top-2 left-8 w-4 h-4 rounded-full bg-[#121317] border-2 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)] z-20 flex items-center justify-center group-hover:scale-110 transition-all"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-amber-200"></div>
        </div>

        <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold tracking-wider">
              PILLAR 03
            </span>
            <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Terminal class="w-5 h-5" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
            Building in the Open
          </h3>
          <p class="text-sm text-slate-300/90 leading-relaxed mb-6">
            We share what we make, open-source our tools, and learn alongside the community. KnitLabs is about creating and sharing together.
          </p>
        </div>

        <ul class="relative z-10 space-y-2 text-xs font-mono text-slate-400 border-t border-white/5 pt-4">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Open-source releases &amp; tools
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Collaborative community feedback
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, Activity, Terminal } from 'lucide-vue-next';
</script>
