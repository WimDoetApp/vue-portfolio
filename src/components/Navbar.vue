<template>
  <aside class="menu">
    <p class="menu-label">Projects</p>
    <ul class="menu-list">
      <li>
        <router-link to="/projects" v-on:click.native="closeNav()">List</router-link>
      </li>
    </ul>
    <p class="menu-label">Resume</p>
    <ul class="menu-list">
      <li>
        <router-link to="/resumeDutch" v-on:click="closeNav()">Dutch</router-link>
        <router-link to="/resume" v-on:click="closeNav()">English</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Navbar"
};
</script>