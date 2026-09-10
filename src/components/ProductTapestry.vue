<template>
  <section id="artifacts" class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-indigo-400 mb-4 shadow-glass">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        DYNAMIC ARTIFACT REGISTRY
      </div>
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
        The Product <span class="bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">Tapestry</span>
      </h2>
      <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
        Interconnected software artifacts engineered with precision. Every project is an expressive strand woven into the KnitLabs ecosystem.
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

    <!-- Empty State Fallback -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16">
      <p class="text-slate-500 font-mono text-sm">No artifacts found in this category.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import projectsData from '../data/projects.json';
import ProductCard from './ProductCard.vue';

const activeCategory = ref('All');
const categories = ['All', 'Live', 'Beta', 'Lab'];

const projects = ref(projectsData);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value;
  }
  return projects.value.filter(p => p.status === activeCategory.value);
});
</script>
