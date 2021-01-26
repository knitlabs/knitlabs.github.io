<template>
  <div id="app">
    <Navbar />
    <div>
      <Home />
      <About />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

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
  background-color: black;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
</style>
