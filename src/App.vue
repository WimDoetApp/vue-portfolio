<template>
  <div>
    <div v-if="this.$route.path != '/resume' && this.$route.path != '/resumeDutch'" class="uses-template">
      <!-- mobile navigation -->
      <div id="mySidenav" class="sidenav">
        <div class="hero-body">
          <!-- <app-user-info></app-user-info> -->
          <aside class="menu">
            <p class="menu-label">General</p>
            <router-link to="/info" v-on:click.native="closeNav()" class="nav-icon fa-nav-icon">
              <i class="fas fa-info-circle"></i>
            </router-link>
            <a
              class="nav-icon fa-nav-icon"
              href="https://www.linkedin.com/in/wim-naudts-83704311b/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a class="nav-icon fa-nav-icon" href="https://twitter.com/wimnaudts" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="nav-icon fa-nav-icon" href="https://github.com/WimDoetApp" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </aside>
          <Navbar></Navbar>
        </div>
      </div>

      <!-- Page layout -->
      <!-- navigation -->
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <img src="./assets/logo.svg" alt="logo" width="112" height="28">
            </router-link>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              v-on:click="openNav()"
              id="burger"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class="navbar-menu">
            <div class="navbar-end">
              <router-link to="/info" class="navbar-item fa-navbar-item">
                <i class="fas fa-info-circle"></i>
              </router-link>
              <a
                class="navbar-item fa-navbar-item"
                href="https://www.linkedin.com/in/wim-naudts-83704311b/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                class="navbar-item fa-navbar-item"
                href="https://twitter.com/wimnaudts"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="navbar-item fa-navbar-item"
                href="https://github.com/WimDoetApp"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- content -->
      <main class="container" id="main">
        <div class="columns no-margin">
          <div class="column is-3 is-hidden-touch">
            <!-- navbar -->
            <!-- <app-user-info></app-user-info> -->
            <Navbar></Navbar>
          </div>
          <div class="column">
            <!-- components -->
            <router-view />
          </div>
        </div>
      </main>
    </div>

    <div v-if="this.$route.path == '/resume' || this.$route.path == '/resumeDutch'"><router-view /></div>

    <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <div>
              <strong>webspace</strong> by
              <a href="http://wim.ninja/">Wim Naudts</a>
              <p>
                <a href="#top">
                  <img src="./assets/logo.svg" alt="logo" style="max-height: 100px;">
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar: Navbar
  },
  methods: {
    openNav: function() {
      var sidenav = document.getElementById("mySidenav");
      var burger = document.getElementById("burger");
      var main = document.getElementById("main");

      if (sidenav.classList.contains("is-active")) {
        sidenav.style.width = "0";
        sidenav.classList.remove("is-active");
        burger.classList.remove("is-active");
        main.classList.remove("lowOpacity");
      } else {
        sidenav.style.width = "250px";
        sidenav.classList.add("is-active");
        burger.classList.add("is-active");
        main.classList.add("lowOpacity");
      }
    }
  }
};
</script>

<style lang="css">
@import "./assets/stijl.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Mono");
</style>
