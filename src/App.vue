<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <Home v-show="this.$store.state.currentPage === 'Home'"/>
      <About v-show="this.$store.state.currentPage === 'About'"/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
  },
};
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
