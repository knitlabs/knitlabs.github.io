<template>
  <div id="homepage">
    <Navbar />
    <div class="content">
      <Home v-if="this.$store.state.currentPage === 'Home'" />
      <About v-if="0 && this.$store.state.currentPage === 'About'" />
      <Blogs v-if="0 && this.$store.state.currentPage === 'Blogs'" />
      <Projects v-if="0 && this.$store.state.currentPage === 'Projects'" />
      <Contact v-if="0 && this.$store.state.currentPage === 'Contact'" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default {
  name: "Homepage",
  components: {
    Navbar,
    Home,
    About,
    Blogs,
    Projects,
    Contact,
  },
};
</script>

<style>
#homepage {
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
