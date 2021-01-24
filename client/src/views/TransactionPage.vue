<template>
    <section>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>CUSTOMER ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                    <td><router-link :to="{name: 'TransactionDetails', params: {id: transaction.id}}">{{transaction.id}}</router-link></td>
                    <td>{{transaction.createdAt}}</td>
                    <td>{{transaction.total}}</td>
                    <td>{{transaction.CustomerId}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name: 'TransactionPage',
    created() {
        this.$store.dispatch('patchTransactions')
    },
    computed: {
        transactions() {
            return this.$store.state.transactions
        }
    },
    methods: {
        showDetails(id) {
            console.log(id)
        }
    }
}
</script>

<style>

</style>