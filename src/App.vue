<template>
  <div class="relative min-h-screen bg-[#121317] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
    <!-- Ambient Radial Background Glows -->
    <div class="pointer-events-none fixed inset-0 z-0 ambient-glow-top"></div>
    <div class="pointer-events-none fixed inset-0 z-0 ambient-glow-mesh opacity-60"></div>

    <!-- Scroll-Driven Animated Thread Overlay -->
    <TheThread />

    <!-- Foreground Content -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Floating Navigation Bar -->
      <Navbar />

      <main class="flex-grow">
        <!-- Hero Section -->
        <HeroSection />

        <!-- Living Product Tapestry -->
        <ProductTapestry />

        <!-- The Craft 3-Act Manifesto -->
        <CraftSection />
      </main>

      <!-- Terminal App Footer -->
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import TheThread from './components/TheThread.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ProductTapestry from './components/ProductTapestry.vue';
import CraftSection from './components/CraftSection.vue';
import AppFooter from './components/AppFooter.vue';
</script>
