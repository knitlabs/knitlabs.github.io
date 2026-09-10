<template>
  <footer class="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10 overflow-hidden">
    <!-- Thread Terminal Spool (Final Knot) -->
    <div class="flex flex-col items-center justify-center mb-12">
      <div 
        data-thread-target="footer-spool"
        data-thread-pin="footer-spool"
        class="relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border-2 border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.8)] group hover:scale-110 transition-transform z-20"
        title="Final thread knot"
      >
        <div class="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-amber-400 animate-pulse"></div>
        <div class="absolute inset-0 rounded-full border border-white/20 scale-125 animate-ping opacity-20"></div>
      </div>
      <span class="text-xs font-mono text-slate-500 uppercase tracking-widest mt-3">Always Crafting // KnitLabs</span>
    </div>

    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
      <!-- Brand & Mission -->
      <div>
        <div class="flex items-center justify-center md:justify-start gap-2.5 mb-2">
          <KnitLogo class="w-6 h-6 shadow-sm" />
          <span class="font-bold tracking-tight text-white font-mono text-base">KNITLABS</span>
        </div>
        <p class="text-xs text-slate-400 max-w-sm">
          Knitting up stories using technology. A collective of people building thoughtful products and open-source tools.
        </p>
      </div>

      <!-- Quick Nav & External Links -->
      <div class="flex items-center gap-6 text-sm text-slate-400">
        <a href="#projects" class="hover:text-indigo-400 transition-colors">Projects</a>
        <a href="#philosophy" class="hover:text-indigo-400 transition-colors">Philosophy</a>
        <a 
          href="https://github.com/knitlabs" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Github class="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>

      <!-- Copyright & Status -->
      <div class="text-xs font-mono text-slate-500 flex flex-col md:items-end gap-1">
        <div class="flex items-center justify-center md:justify-end gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-slate-400">Active Collective</span>
        </div>
        <span>&copy; {{ currentYear }} KnitLabs. Built with care.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { Github } from 'lucide-vue-next';
import KnitLogo from './KnitLogo.vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
