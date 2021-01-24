<template>
  <section>
    <form @submit.prevent="createTicket">
        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="type" class="form-label">Type:</label>
            <input type="text" class="form-control" id="type" name="type" v-model="type">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input type="number" class="form-control" id="price" name="price" v-model="price">
        </div>
        <div class="mb-3">
            <label for="quota" class="form-label">Quota:</label>
            <input type="number" class="form-control" id="quota" name="quota" v-model="quota">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
    name: 'CreateTicket',
    data() {
        return {
            name: '',
            type: '',
            price: 0,
            quota: 0
        }
    },
    methods: {
        createTicket() {
            const payload = {
                name: this.name,
                type: this.type,
                price: this.price,
                quota: this.quota,
                EventId: this.$route.params.id
            }
            this.$store.dispatch('createTicket', payload)
        }
    }
}
</script>

<style>

</style>