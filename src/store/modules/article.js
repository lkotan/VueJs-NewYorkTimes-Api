import axios from "axios"

const base_url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=";
const api_key = "xldzclQ13JRNqYs2RKZg0cBbSuqNsrlD"


const state = {
  article: []
};
const getters = {
  getArticle: state => state.article
};
const actions = {
  fetchArticle() {
    axios.get(`${base_url}${api_key}`).then(res => {
      state.article = res.data.results;
    })
  }
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
}
