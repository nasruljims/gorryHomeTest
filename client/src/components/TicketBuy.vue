<template>
    <tr>
        <td>{{ticket.name}}</td>
        <td>{{ticket.type}}</td>
        <td>{{ticket.price}}</td>
        <td>{{ticket.quota}}</td>
        <td><button type="button" class="btn btn-primary" @click="addTicket">ADD</button> <button type="button" class="btn btn-danger" @click="rmvTicket">REMOVE</button></td>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'TicketDetails',
    props: ['ticket'],
    methods: {
        addTicket() {
            this.$store.dispatch('addTicket', this.ticket.id)
        },
        rmvTicket() {
            this.$store.dispatch('rmvTicket', this.ticket.id)
        }
    }
}
</script>

<style>

</style>