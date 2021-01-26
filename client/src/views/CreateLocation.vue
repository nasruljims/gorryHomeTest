<template>
  <section id="create-location-page" class="row justify-content-center mt-5">
      <div class="col-7 shadow-lg p-3 mb-5 bg-white rounded">
            <form @submit.prevent="createLocation">
                <div class="mb-3">
                    <label for="city" class="form-label">City:</label>
                    <input type="text" class="form-control" id="city" v-model="city">
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Address:</label>
                    <input type="text" class="form-control" id="address" v-model="address">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
  </section>
</template>

<script>
export default {
    name: 'CreateLocation',
    data() {
        return {
            city: '',
            address: ''
        }
    },
    methods: {
        createLocation() {
            const payload = {
                city: this.city,
                address: this.address
            }
            this.$store.dispatch('createLocation', payload)
        }
    }
}
</script>

<style>

</style>