<template>
  <section id="projects" class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-indigo-400 mb-4 shadow-glass">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        ON THE WORKBENCH
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
        What We're <span class="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">Building</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
        We're a group of builders exploring ideas and crafting tools we care about. Here is a look at what we're currently prototyping and preparing to launch.
      </p>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center justify-center gap-2 mt-8">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200',
            activeCategory === category
              ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)] border border-indigo-400'
              : 'bg-zinc-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Product Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <ProductCard 
        v-for="project in filteredProjects" 
        :key="project.id" 
        :project="project" 
      />
    </div>

    <!-- Community Invitation Banner -->
    <div class="mt-16 rounded-2xl bg-zinc-900/40 border border-white/5 p-8 text-center max-w-2xl mx-auto">
      <h4 class="text-white font-semibold text-base mb-2">Want to build something with us?</h4>
      <p class="text-slate-400 text-sm mb-4">
        KnitLabs is an open community of creators. Follow our journey or collaborate with us directly on GitHub.
      </p>
      <a 
        href="https://github.com/knitlabs" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <span>Explore KnitLabs on GitHub &rarr;</span>
      </a>
    </div>

    <!-- Empty State Fallback -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16">
      <p class="text-slate-500 font-mono text-sm">No projects found in this category.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import projectsData from '../data/projects.json';
import ProductCard from './ProductCard.vue';

const activeCategory = ref('All');
const categories = ['All', 'Coming Soon', 'In Progress', 'Lab'];

const projects = ref(projectsData);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value;
  }
  return projects.value.filter(p => p.status === activeCategory.value);
});
</script>
