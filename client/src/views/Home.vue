<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>List of Events</h1>
    <p>info: Click the event name to see the event details</p>
    <ul class="list-group" v-for="event in events" :key="event.id">
      <li class="list-group-item"><router-link :to="{ name: 'DetailsEvent', params: { id: event.id } }">{{event.name}}</router-link></li>
    </ul> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('patchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  method: {
    
  }
}
</script>
