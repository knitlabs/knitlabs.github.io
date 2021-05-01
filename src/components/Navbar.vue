<template>
  <div class="navbar">
    <div class="nav-logo">&emsp;KNITLABS</div>
    <div class="nav-list">
      <div class="collapsible-navbar" v-on:click="toggleNavbar">
        <svg viewBox="0 0 100 60" width="40" height="40" v-show="!isNavbarOpen">
          <rect y="0" width="80" height="10"></rect>
          <rect y="30" width="80" height="10"></rect>
          <rect y="60" width="80" height="10"></rect>
        </svg>
        <svg viewBox="0 0 100 60" height="40" width="40" v-show="isNavbarOpen">
          <line
            x1="0"
            y1="0"
            x2="70"
            y2="70"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="70"
            y1="0"
            x2="0"
            y2="70"
            stroke="black"
            stroke-width="10"
          />
        </svg>
      </div>
      <div class="nav-list-items" v-show="isNavbarOpen">
        <div @click="$store.commit('changePage', 'Home')" v-bind:class="{'nav-list-item': true, 'active': (this.$store.state.currentPage === 'Home')}">HOME</div>
        <div @click="$store.commit('changePage', 'About')" v-bind:class="{'nav-list-item': true, 'active': (this.$store.state.currentPage === 'About')}">ABOUT US</div>
        <div @click="$store.commit('changePage', 'Blogs')" v-bind:class="{'nav-list-item': true, 'active': (this.$store.state.currentPage === 'Blogs')}">BLOGS</div>
        <div v-if="0" @click="$store.commit('changePage', 'Projects')" v-bind:class="{'nav-list-item': true, 'active': (this.$store.state.currentPage === 'Projects')}">PROJECTS</div>
        <div @click="$store.commit('changePage', 'Contact')" v-bind:class="{'nav-list-item': true, 'active': (this.$store.state.currentPage === 'Contact')}">CONTACT US</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      isNavbarOpen: window.innerWidth > 745,
    }
  },
  created() {
    window.addEventListener("resize", this.checkWidth)
  },
  destroyed() {
    window.removeEventListener("resize", this.checkWidth)
  },
  methods: {
    toggleNavbar: function () {
      this.isNavbarOpen = !this.isNavbarOpen
    },
    checkWidth: function () {
      window.innerWidth > 745
        ? (this.isNavbarOpen = true)
        : (this.isNavbarOpen = false)
    },
  },
}
</script>

<style>
.navbar {
  padding: 20px 0px;
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-logo {
  padding-left: 10px;
  font-weight: 800;
  font-size: larger;
}

svg {
  filter: invert(1);
}

.nav-list,
.nav-list-items {
  display: flex;
  flex-direction: row;
}

.nav-list-item {
  padding: 0px 20px;
  cursor: pointer;
  color: #A0A0A0;
}

.collapsible-navbar {
  display: none;
}

.active {
  font-weight: 600;
  color: white;
}

@media only screen and (max-width: 745px) {
  .nav-logo{
    padding-top: 10px;
  }
  .collapsible-navbar {
    display: block;
    align-self: flex-end;
    cursor: pointer;
  }
  .navbar {
    align-items: flex-start;
  }
  .nav-list,
  .nav-list-items {
    display: flex;
    flex-direction: column;
  }
  .nav-list-item {
    padding: 10px 10px;
    align-self: flex-end;
  }
}
</style>
