<template>
  <div class="margin-text">
    <h1 class="title is-1">About me</h1>

    <div class="column is-one-third">
      <div class="card about-me-card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="../assets/images/author.png" alt="author" class="is-rounded">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Wim Naudts</p>
            <p class="subtitle is-6">@wimnaudts</p>
          </div>
        </div>

        <div class="content personal-links">
          <ul>
            <li><i class="fas fa-phone"></i><a href="tel:+32472285696"> +32 472 28 56 96</a></li>
            <li><i class="fas fa-envelope"></i><a href="mailto:me@wim.ninja"> me@wim.ninja</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <h2 class="title is-2">About this site</h2>

    <div class="column">
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <h4 class="title is-4 has-text-white">Powered by:</h4>
          <p>Made with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
          <p>CSS framework: <a href="https://bulma.io" target="_blank">Bulma</a></p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  mounted(){
      this.$data.useTemplate = false;
      console.log(this.$data.useTemplate)
  }
};
</script>