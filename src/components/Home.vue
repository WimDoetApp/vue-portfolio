<template>
  <div class="homepage">
    <div class="title-text">
      <h1 class="title is-1">wim's webspace</h1>
      <p class="intro-text">
        <b>Hi.</b> My name is Wim Naudts, and I do <span class="underlined">computer stuff</span>
      </p>
      <p>I don't really have much to put here at the moment, so here's a nice picture:</p>
      <img alt="background" src="../assets/images/background.jpg" style="max-height: 500px; margin-top: 20px;">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted(){
      console.log("hoi")
  }
};
</script>
