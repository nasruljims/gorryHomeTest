<template>
  <section id="login-page">
      <div>
          <h1>Login Page</h1>
          <router-link to="/home"><button type="button" class="btn btn-primary">Login as Admin</button></router-link>
          
          <button type="button" class="btn btn-warning">Login as Customer</button>
      </div>
  </section>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style>

</style>