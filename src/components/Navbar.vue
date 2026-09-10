<template>
  <header class="fixed top-4 sm:top-6 inset-x-4 max-w-5xl mx-auto z-50 transition-all duration-300">
    <nav class="rounded-2xl bg-zinc-900/75 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 shadow-glass flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform">
          K
        </div>
        <span class="font-extrabold tracking-tight text-white font-mono text-base group-hover:text-indigo-300 transition-colors">
          KNIT<span class="text-indigo-400">LABS</span>
        </span>
      </a>

      <!-- Center Links -->
      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="#artifacts" class="hover:text-white transition-colors">Artifacts</a>
        <a href="#craft" class="hover:text-white transition-colors">Our Craft</a>
        <a href="https://github.com/knitlabs" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Open Source</a>
      </div>

      <!-- Right CTA -->
      <div class="flex items-center gap-3">
        <a 
          href="https://github.com/knitlabs" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all shadow-sm"
        >
          <Github class="w-4 h-4" />
          <span class="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Github } from 'lucide-vue-next';
</script>
