<template>
    <tr>
        <td>{{ticket.name}}</td>
        <td>{{ticket.type}}</td>
        <td>{{ticket.price}}</td>
        <td>{{ticket.quota}}</td>
        <td><button type="button" class="btn btn-danger" @click="delTicket">DELETE</button></td>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'TicketDetails',
    props: ['ticket'],
    methods: {
        delTicket() {
             Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    const payload = {
                        id: this.ticket.id,
                        eventId: this.ticket.EventId
                    }
                    this.$store.dispatch('delTicket', payload)
                }
            })
        }
    }
}
</script>

<style>

</style>