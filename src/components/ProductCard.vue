<template>
  <div 
    :data-thread-target="project.id"
    class="group relative rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-glass-hover overflow-hidden"
  >
    <!-- Thread Pin Accent Indicator -->
    <div class="absolute -top-1.5 left-8 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 border border-white/40 shadow-[0_0_8px_rgba(99,102,241,0.8)] opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>

    <!-- Background Card Glow on Hover -->
    <div class="absolute -right-16 -top-16 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>

    <!-- Card Content -->
    <div>
      <!-- Header: Project Icon + Title + Status Pill -->
      <div class="flex items-center justify-between gap-3 mb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 group-hover:scale-105 transition-all shadow-sm">
            <component :is="resolvedIcon" class="w-5 h-5" />
          </div>
          <div>
            <h3 class="font-semibold text-lg text-white group-hover:text-indigo-200 transition-colors">
              {{ project.title }}
            </h3>
          </div>
        </div>

        <!-- Status Pill -->
        <span 
          :class="[
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border tracking-wide uppercase',
            statusStyles[project.status] || statusStyles.Archived
          ]"
        >
          <span :class="['w-1.5 h-1.5 rounded-full animate-pulse', statusDotStyles[project.status] || statusDotStyles.Archived]"></span>
          {{ project.status }}
        </span>
      </div>

      <!-- Body: Tagline -->
      <p class="text-sm text-slate-300/90 leading-relaxed mb-5">
        {{ project.tagline }}
      </p>

      <!-- Tech Tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5 text-slate-300 font-mono tracking-tight hover:bg-white/10 transition-colors"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Footer Links: Interactive action buttons -->
    <div class="pt-4 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
      <div class="flex items-center gap-2 w-full">
        <!-- Live Demo Link -->
        <a 
          v-if="project.links?.live" 
          :href="project.links.live" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-white bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
        >
          <ExternalLink class="w-3.5 h-3.5" />
          <span>Launch Artifact</span>
        </a>
        <button 
          v-else 
          disabled
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 bg-white/[0.02] border border-white/5 cursor-not-allowed opacity-50"
        >
          <ExternalLink class="w-3.5 h-3.5" />
          <span>In Incubation</span>
        </button>

        <!-- GitHub Repo Link -->
        <a 
          v-if="project.links?.github" 
          :href="project.links.github" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          title="View Source Repository"
        >
          <Github class="w-3.5 h-3.5" />
          <span class="sr-only sm:not-sr-only">Code</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Terminal, 
  Activity 
} from 'lucide-vue-next';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// Map icon string to component
const iconMap = {
  Activity,
  Terminal,
  Sparkles,
  ExternalLink,
  Github
};

const resolvedIcon = computed(() => {
  return iconMap[props.project.icon] || Sparkles;
});

const statusStyles = {
  Live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Beta: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  Lab: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  Archived: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30'
};

const statusDotStyles = {
  Live: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
  Beta: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
  Lab: 'bg-violet-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]',
  Archived: 'bg-zinc-400'
};
</script>
