<template>
    <section>
        <div>
            <h1>Event Details</h1>
            <ul class="list-group">
                <li class="list-group-item" >Name: {{eventDetails.name}}</li>
                <li class="list-group-item" >Start: {{eventDetails.start_date}}</li>
                <li class="list-group-item" >End: {{eventDetails.end_date}}</li>
                <li class="list-group-item" >Location: {{eventDetails.Location.city}}, {{eventDetails.Location.address}}</li>
            </ul>
        </div>
        <div v-if="isCustomer == 'admin'" @changePage="changePage">
            <h1>Event's Tickets</h1>
            <button type="button" class="btn btn-primary" @click="createTicket">Create Ticket</button>
             <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quota</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TicketDetails v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
                </tbody>
             </table>
        </div>
        <div v-if="isCustomer == 'customer'" @changePage="changePage" class="mt-5">
            <h1>Event Tickets</h1>
             <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quota</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TicketBuy v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"/>
                </tbody>
             </table>
            <Cart/>
        </div>
    </section>
</template>

<script>
import TicketDetails from '../components/TicketDetails'
import TicketBuy from '../components/TicketBuy'
import Cart from '../components/Cart'

export default {
    name: 'DetailsEvent',
    components: {
        TicketDetails,
        TicketBuy,
        Cart
    },
    data() {
        return {
            isCustomer: 'admin'
        }
    },
    created() {
        if(localStorage.customer) this.changePage('customer')
        this.$store.dispatch('eventDetails', this.$route.params.id)
        this.$store.dispatch('patchTickets', this.$route.params.id)
    },
    computed: {
        eventDetails() {
            return this.$store.state.eventDetails
        },
        tickets() {
            return this.$store.state.tickets
        }
    },
    methods: {
        createTicket() {
            this.$router.push({ name: 'CreateTicket', params: { id: this.$route.params.id } })
        },
        changePage(name) {
            this.isCustomer = name;
        }
    }
}
</script>

<style>

</style>