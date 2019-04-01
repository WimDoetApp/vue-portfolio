<template>
  <div class="content">
    <section class="hero is-info">
      <div class="hero-body">
        <h2 class="subtitle">WikiWhat?</h2>
        <p>WikiBot is a twitter bot that will take any word and search it on wikipedia, composing and posting a short tweet about the word with a link to a random wikipedia page about the word.</p>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body columns">
        <div class="column">
          <article class="tile is-child notification is-primary">
            <p>Try it! Type any word into the textbox and press submit! The bot will post a tweet and it will appear on this page a couple of seconds later!</p>
          </article>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Word</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" id="input" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-link" id="buttonTweet" v-on:click="submitTweet()">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero" v-if="loading">
      <div class="columns is-centered">
         <div class="column is-narrow">
           <div class="loader"></div>
         </div>
      </div>
    </section>

    <section class="hero" v-if="!loading">
      <div class="hero-body columns is-multiline" id="twitterFeed">
        <div class="column is-half" v-for="tweet in tweets" :key="tweet.id">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      :src="tweet.image"
                      class="profileImage"
                      alt="Placeholder image"
                    >
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ tweet.user }}</p>
                  <p class="subtitle is-6">
                    <a :href="'https://twitter.com/' + tweet.userLink">@ {{ tweet.user }}</a>
                  </p>
                </div>
              </div>

              <div class="content">
                <span class="text" v-html="tweet.text" v-linkified>
                </span>
                <br>
                <span class="createdAt">{{ tweet.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      tweets: []
    };
  },
  mounted: function() {
    this.seeBot();
  },
  methods: {
    //function to collect the latest tweets
    seeBot: function() {
      axios
        .get(
          "https://wt-b8d3bad832e9998cd77b194b1858005a-0.sandbox.auth0-extend.com/seewikibot?webtask_no_cache=1&w=Wmeefimldkfje883430Alm"
        )
        .then(response => {
          console.log(response.data);

          response.data.forEach(element => {
            var text = this.replaceHashtag(element["full_text"])

            var tweet = {
              id: element["id_str"],
              text: text,
              user: element["user"]["name"],
              userLink: element["user"]["screen_name"],
              date: element["created_at"],
              image: element["user"]["profile_image_url"]
            };

            this.tweets.push(tweet);
          })

          this.loading = false;
        });
    },
    //function to replace hashtags with links
    replaceHashtag: function(text) {
      var match = text.match(/(^|)#[a-z'-_Ã -Ã¿]+/gi)
      var matches = match[0].split(" ")

      matches.forEach(element => {
        var link = 'https://twitter.com/search?q=' + element.replace('#', "%23");

        text = text.replace(element, "<a href='" + link + "'>" + element + "</a>")
      })

      return text
    },
    //function to post a tweet
    makeTweet: function(input){
      axios.get("https://wt-b8d3bad832e9998cd77b194b1858005a-0.sandbox.auth0-extend.com/wikibot?webtask_no_cache=1&w=Wmeefimldkfje883430Alm&s=" + input).then(response => {
        console.log(response)
        this.tweets = []
        this.seeBot()
      })
    },
    //function when button is clicked 
    submitTweet: function(){
      var input = document.getElementById("input").value

      console.log(input)

      if(input != ""){
        this.makeTweet(input)
      }else{
        alert('Input is required!')
      }
    }
  }
};
</script>