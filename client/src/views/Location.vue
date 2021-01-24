<template>
  <section id="location-page">
      <h1>Available Locations</h1>
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>City</th>
                  <th>Address</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="location in locations" :key="location.id">
                  <td>{{location.city}}</td>
                  <td>{{location.address}}</td>
              </tr>
          </tbody>
      </table>
  </section>
</template>

<script>
export default {
    name: 'Location',
    created() {
        this.$store.dispatch('patchLocations')
    },
    computed: {
        locations() {
            return this.$store.state.locations
        }
    }
}
</script>

<style>

</style>