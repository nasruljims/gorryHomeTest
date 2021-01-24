<template>
  <section>
      <h1>TRANSACTION DETAILS</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>TICKET NAME</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="details in transactionDetails" :key="details.id">
                    <td>{{details.Ticket.name}}</td>
                    <td>{{details.quantity}}</td>
                    <td>{{details.total}}</td>
                </tr>
            </tbody>
        </table>
  </section>
</template>

<script>
export default {
    name: 'TransactionDetails',
    created() {
        this.$store.dispatch('transactionDetails', this.$route.params.id)
    },
    computed: {
        transactionDetails() {
            return this.$store.state.transactionDetails
        }
    }
}
</script>

<style>

</style>