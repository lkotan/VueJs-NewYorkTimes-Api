<template>
  <div class="container">
    <h3 class="center indigo-text">
      New York Times <span class="grey-text">Api</span>
    </h3>
    <div class="row" data-aos="fade-up">
      <div class="col s12 m12">
        <div
          class="card horizontal deep-purple lighten-2"
          v-for="article in getArticle"
          :key="article.title"
        >
          <div class="card-image">
            <img :src="article.thumbnail_standard" />
          </div>
          <div class="card-stacked">
            <span class="card-title center black-text">{{
              article.title
            }}</span>
            <div class="card-content">
              <p class="white-text">
                {{ article.abstract }}
              </p>
            </div>
            <div class="card-action">
              <span>Source : {{ article.source }}</span>
              <a
                :href="article.url"
                target="_blank"
                class="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i class="material-icons">add</i>
              </a>
              <span style="float:right">Section : {{ article.section }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["fetchArticle"])
  },
  computed: {
    ...mapGetters(["getArticle"])
  },
  created() {
    this.fetchArticle();
  }
};
</script>

<style scoped>
.card span {
  font-size: 18px;
}
</style>
