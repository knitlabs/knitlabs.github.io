<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <li class="nav-item nav-left nav-logo"><a href="#">KNITLABS</a></li>
      <li v-on:click="toggleNavbar" class="navbar-toggle nav-right">
        <svg v-show="!isActive" viewBox="0 0 100 80" width="40" height="40">
          <rect y="20" width="100" height="10"></rect>
          <rect y="50" width="100" height="10"></rect>
          <rect y="80" width="100" height="10"></rect>
        </svg>
        <svg v-show="isActive" viewBox="0 0 100 80" height="40" width="40">
          <line
            x1="20"
            y1="20"
            x2="90"
            y2="90"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="90"
            y1="20"
            x2="20"
            y2="90"
            stroke="black"
            stroke-width="10"
          />
        </svg>
      </li>
    </ul>
    <ul class="nav-list nav-right text-right" v-show="isActive">
      <li class="nav-item float-left"><a href="#home">HOME</a></li>
      <li class="nav-item float-left"><a href="#about">ABOUT US</a></li>
      <li class="nav-item float-left"><a href="#blogs">BLOGS</a></li>
      <li class="nav-item float-left"><a href="#projects">PROJECTS</a></li>
      <li class="nav-item float-left"><a href="#contact">CONTACT US</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      isActive: window.innerWidth > 745,
      collapsedNavbar: window.innerWidth < 745,
    };
  },
  created() {
    window.addEventListener("resize", this.checkWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkWidth);
  },
  methods: {
    toggleNavbar: function () {
      this.isActive = !this.isActive;
    },
    checkWidth: function () {
      this.collapsedNavbar = window.innerWidth < 745;
      this.collapsedNavbar == false
        ? (this.isActive = true)
        : (this.isActive = false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  position: fixed;
  width: 97%;
}
ul {
  list-style-type: none;
  margin: 0%;
  padding: 0%;
  overflow: hidden;
}
.nav-item,
.nav-list {
  display: inline;
}
.nav-logo a {
  font-weight: 900;
  padding: 15px;
  font-size: 1.5rem;
}
.nav-left,
.float-left {
  float: left;
}
.nav-right {
  float: right;
}
a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 20px;
}
.navbar-toggle {
  display: none;
  filter: invert(1);
}
.text-right {
  text-align: right;
}
@media only screen and (max-width: 745px) {
  .nav-list {
    display: block;
    width: 100%;
  }
  .nav-item {
    display: block;
  }
  li > a {
    padding-right: 10px;
  }
  .navbar-toggle {
    display: inline-block;
    padding-right: 10px;
    cursor: pointer;
  }
  .float-left {
    float: none;
  }
}
</style>
