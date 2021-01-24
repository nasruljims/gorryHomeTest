import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    locations: [],
    eventDetails: {},
    tickets: [],
    carts: [],
    transactions: [],
    transactionDetails: []
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    },
    setLocations(state, payload) {
      state.locations = payload
    },
    eventDetails(state, payload) {
      state.eventDetails = payload
    },
    setTickets(state, payload) {
      state.tickets = payload
    },
    setCarts(state, payload) {
      state.carts = payload
    },
    setTransactions(state, payload) {
      state.transactions = payload
    },
    setTransDetails(state, payload) {
      state.transactionDetails = payload
    }
  },
  actions: {
    login(context, payload) {
      axios({
        url:'/customer/login',
        method: 'post',
        data: payload
      })
      .then(({data}) => {
        const userId = data.id
        localStorage.setItem('customer', userId)
        router.push({ name: 'Home' })
      })
    },
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
    patchTickets(context, eventId) {
      axios({
        url: `/ticket/${eventId}`,
        method: 'get'
      })
      .then(({ data }) => {
        context.commit('setTickets', data)
        console.log(data)
      })
    },
    patchCarts(context) {
      axios({
        url: '/cart',
        method: 'get'
      })
      .then(({ data }) => {
        context.commit('setCarts', data)
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
    },
    createLocation(context, payload) {
      axios({
        url: '/location/create',
        method: 'post',
        data: payload
      })
      .then(data => {
        console.log(data)
        router.push({ name: 'Location'})
      })
    },
    createTicket(context, payload) {
      axios({
        url: '/event/ticket/create',
        method: 'post',
        data: payload
      }).then(data => {
        console.log(data)
        router.push({ name: 'DetailsEvent', params: { id: payload.EventId} })
      })
    },
    eventDetails(context, id) {
      axios({
        url: `/event/get_info/${id}`,
        method: 'get',
      })
      .then(({ data }) => {
        context.commit('eventDetails', data)
      })
    },
    delTicket(context, payload) {
      axios({
        url: `/ticket/${payload.id}`,
        method: 'delete'
      })
      .then(data => {
        console.log(data)
        Swal.fire({
          icon: 'warning',
          title: 'Item deleted',
          showConfirmButton: false,
          timer: 1000
        })
        this.dispatch('patchTickets')
        router.push({ name: 'Home' })
      })
    },
    addTicket(context, id) {
      axios({
        url: `/cart/${id}`,
        method: 'post'
      })
      .then(data => {
        console.log(data)
        this.dispatch('patchCarts')
      })
    },
    rmvTicket(context, id) {
      axios({
        url: `/cart/${id}`,
        method: 'put'
      })
      .then(data => {
        console.log(data)
        this.dispatch('patchCarts')
      })
    },
    delCart(context, id) {
      axios({
        url: `/cart/${id}`,
        method: 'delete'
      })
      .then(data => {
        console.log(data)
        this.dispatch('patchCarts')
      })
    },
    purchase(context, payload) {
      axios({
        url: '/transaction/purchase',
        method: 'post',
        data: payload
      })
      .then(data => {
        console.log(data)
        this.dispatch('patchTransactions')
        this.dispatch('patchCarts')
      })
    },
    patchTransactions(context) {
      axios({
        url: '/transaction',
        method: 'get'
      })
      .then(({ data }) => {
        context.commit('setTransactions', data)
      })
    },
    transactionDetails(context, id) {
      axios({
        url: `/transaction/get_info/${id}`,
        method: 'get'
      })
      .then(({ data }) => {
        context.commit('setTransDetails', data)
      })
    }
  },
  modules: {
  }
})
