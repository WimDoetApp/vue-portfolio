<template>
  <main class="bd-main">
    <section class="hero is-primary">
      <div class="container">
        <div class="hero-body">
          <div class="columns is-multiline">
            <div class="column is-two-thirds">
              <h1 class="title hoofd">Wim Naudts</h1>
              <h2 class="subtitle">Born: 5 june 1997</h2>
            </div>
            <div class="column is-one-third">
              <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/images/author.png" alt="headshot">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-one-third">
              <div class="paragraaf">
                <h1 class="title">Contact</h1>
                <p class="info">
                  <i class="fas fa-phone"></i> +32472285696
                </p>
                <p class="info">
                  <i class="fas fa-map-marker-alt"></i> Secretarisdreef 5 2288 Bouwel
                </p>
                <p class="info">
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:me@wim.ninja">me@wim.ninja</a>
                </p>
              </div>

              <div class="paragraaf">
                <h1 class="title">Skills</h1>
                <h2 class="title is-5">UI design</h2>
                <p>HTML5</p>
                <p>CSS3</p>
                <p class="info">XAML</p>

                <h2 class="title is-5">Programming languages</h2>
                <p>Javascript</p>
                <p>Jquery</p>
                <p>PHP</p>
                <p>Python</p>
                <p class="info">C#</p>

                <h2 class="title is-5">Other</h2>
                <p>Angular</p>
                <p>MongoDB</p>
                <p>NodeJS</p>
                <p>SQL</p>
                <p>WPF</p>
                <p>MVVM</p>
                <p>MVC</p>
                <p class="info">UML</p>
              </div>
            </div>

            <div class="column is-two-thirds">
              <div class="paragraaf">
                <h1 class="title">Education</h1>
                <h2 class="subtitle onderlijnd">Bachelor (Thomas More Geel)</h2>
                <p class="info">Applied informatics
                  <span class="tab">2016-2019</span>
                </p>
                <h2 class="subtitle onderlijnd">Secundary Education (Kardinaal Van Roey Instituut)</h2>
                <p class="info">Business & IT management
                  <span class="tab">2014-2016</span>
                </p>
              </div>

              <div class="paragraaf">
                <h1 class="title">Personal skills</h1>
                <p class="info">
                  <b>Resolute</b>
                  <span
                    class="tab"
                  >Won't give up in searching for the right solution for the project.</span>
                </p>
                <p class="info">
                  <b>Eager to learn</b>
                  <span
                    class="tab"
                  >Always willing to learn about new technologies, not afraid to take the initiative.</span>
                </p>
              </div>

              <div class="paragraaf">
                <h1 class="title">Languages</h1>
                <p class="info">
                  <b>Dutch</b> native speaker
                </p>
                <p class="info">
                  <b>English</b> professional proficiency (C2)
                </p>
                <p class="info">
                  <b>Frans</b> basic skill
                </p>
              </div>

              <div class="paragraaf">
                <h1 class="title">Extra</h1>
                <p class="info">Driving license + car</p>
              </div>

              <div class="paragraaf">
                <h1 class="title">Reference</h1>
                <p class="info">
                  <a href="http://wim.ninja/">
                    <b>Online portfolio</b> www.wim.ninja
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.hoofd {
  font-size: 350%;
}

.tab {
  padding-left: 10%;
}

.info {
  padding-bottom: 10px;
}

.onderlijnd {
  text-decoration: underline;
}

.footer {
  margin-top: 0px;
}
</style>
