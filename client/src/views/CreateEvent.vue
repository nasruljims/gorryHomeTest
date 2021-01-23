<template>
  <section id="create-event-page">
    <form @submit.prevent="createEvent">
        <div class="mb-3">
            <label for="name" class="form-label">Event Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="start">Start Date:</label>
            <input type="date" id="start" name="startDate" v-model="start_date">
        </div>
        <div class="mb-3">
            <label for="end">End Date:</label>
            <input type="date" id="end" name="endDate" v-model="end_date">
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="locationSelect">Locations</label>
            <select class="form-select" id="locationSelect" v-model="LocationId">
                <!-- <option value="#">Choose...</option> -->
                <option v-for="location in locations" :key="location.id" v-bind:value="location.id">{{location.city}}, {{location.address}}</option>
            </select>
        </div>
        <!-- <p>{{locations}}</p> -->
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
    name: 'CreateEvent',
    data() {
        return {
            name: '',
            start_date: '',
            end_date: '',
            LocationId: ''
        }
    },
    created() {
        this.$store.dispatch('patchLocations')
    },
    computed: {
        locations() {
            return this.$store.state.locations
        }
    },
    methods: {
        createEvent() {
            const payload = {
                name: this.name,
                start_date: this.start_date,
                end_date: this.end_date,
                LocationId: this.LocationId
            }
            this.$store.dispatch('createEvent', payload)
        }
    }
}
</script>

<style>

</style>