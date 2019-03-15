<template>
  <div class="margin-text">
    <h1 class="title is-1"><span class="underlined">Projects</span></h1>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-one-third">
              <div class="card card-corners">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="../assets/images/moviehut.png" alt="MovieHut">
                  </figure>
                </div>

                <div class="card-content">
                  <div class="content">
                    <h3 class="title is-3">Moviehut</h3>
                    
                    <p>
                      Moviehut is a Cordova android app.
                    </p>

                    <a class="button is-ninja" href="moviehut">GO</a>

                    <div class="tags are-medium project-tags">
                      <span class="tag">Cordova</span>
                      <span class="tag">Javascript</span>
                      <span class="tag">Twitter API</span>
                      <span class="tag">TMDB API</span>
                      <span class="tag">Materialize</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-one-third">
              <div class="card card-corners">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="../assets/images/wikibot.png" alt="WikiBot">
                  </figure>
                </div>

                <div class="card-content">
                  <div class="content">
                    <h3 class="title is-3">WikiBot</h3>

                    <p>Wikibot is a simple twitter bot</p>

                    <a class="button is-ninja" href="wikibot">GO</a>

                    <div class="tags are-medium project-tags">
                      <span class="tag">Javascript</span>
                      <span class="tag">NodeJS</span>
                      <span class="tag">Twitter API</span>
                      <span class="tag">Bulma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p>
      <i>These projects are not regularly updated, and may contain outdated code.</i>
    </p>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>