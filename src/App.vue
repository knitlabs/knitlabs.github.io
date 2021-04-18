<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <Home v-if="this.$store.state.currentPage === 'Home'"/>
      <About v-if="this.$store.state.currentPage === 'About'"/>
      <Blogs v-if="this.$store.state.currentPage === 'Blogs'"/>
      <Projects v-if="this.$store.state.currentPage === 'Projects'"/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Blogs from "./components/Blogs"
import Projects from "./components/Projects"

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Blogs,
    Projects,
  },
}
</script>

<style>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.content::-webkit-scrollbar {
  display: none; /* Chrome */
}
</style>
