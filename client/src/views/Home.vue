<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>List Of Event</h1>
    <ul class="list-group" v-for="event in events" :key="event.id">
      <li class="list-group-item">{{event.name}}</li>
    </ul> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  created() {
    this.$store.dispatch('patchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>
