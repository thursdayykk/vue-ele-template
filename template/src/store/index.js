import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {}
const getters = {}
const actions = {}
const mutations = {}

const modules = {}
const files = require.context('../', true, /\.\/pages\/([^/]+)\/store.js$/)

files.keys().forEach(key => {
  if (key.includes('store.js')) {
    modules[key.split('/')[2].split('.')[0]] = files(key).default
  }
})

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules
})
