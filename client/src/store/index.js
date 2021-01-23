import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    locations: []
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    },
    setLocations(state, payload) {
      state.locations = payload
    }
  },
  actions: {
    patchEvents(context) {
      axios({
        url:'/event',
        method: 'get',
      })
      .then(({ data }) => {
        context.commit('setEvents', data)
      })
    },
    patchLocations(context) {
      axios({
        url: '/location',
        method: 'get'
      })
      .then(({ data }) => {
        context.commit('setLocations', data)
      })
    },
    createEvent(context, payload) {
      axios({
        url: '/event/create',
        method: 'post',
        data: payload
      })
      .then(data => {
        console.log(data)
        router.push({name: 'Home'})
      })
    }
  },
  modules: {
  }
})
