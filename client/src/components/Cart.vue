<template>
    <section>
        <h1>Customer's Cart</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Ticket Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in carts" :key="cart.id">
                    <th scope="row">{{cart.Ticket.name}}</th>
                    <td>{{cart.quantity}}</td>
                    <td>{{cart.total}}</td>
                    <td><button type="button" class="btn btn-danger" @click="delCart(cart.id)">DELETE</button></td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" @click="purchase" v-if="carts.length != 0">Purchase</button>
    </section>
    
</template>

<script>
export default {
    name: 'Cart',
    created() {
        this.$store.dispatch('patchCarts')
    },
    computed: {
        carts() {
            return this.$store.state.carts
        }
    },
    methods: {
        purchase() {
            const payload = {
                id: localStorage.customer
            }
            this.$store.dispatch('purchase', payload)
        },
        delCart(id) {
            this.$store.dispatch('delCart', id)
        }
    }
}
</script>

<style>

</style>