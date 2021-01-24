<template>
  <section id="login-page">
          <h1 class="mb-3">Login Page</h1>
          <div class="mb-5">
            <button type="button" class="btn btn-primary" @click="admin">Login as Admin</button>
          </div>
          <div>
            <button type="button" class="btn btn-warning" @click="login">Login as Customer</button>
          </div>
  </section>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        login() {
          const payload = {email: 'nasrul@mail.com'}
          this.$store.dispatch('login', payload)
        },
        admin() {
          localStorage.clear()
          this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>

</style>