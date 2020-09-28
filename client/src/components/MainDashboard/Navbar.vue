<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="nav">
        <li><router-link to="/main-dashboard">Main Dashboard</router-link></li>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */

export default {
  data () {
    return {}
  },
  computed: {
    loggedIn() {
      return this.store.getters.loggedIn
    }
  }

}
</script>
