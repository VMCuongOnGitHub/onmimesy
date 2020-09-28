<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">

        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="name">Account name</label>
            <input type="text" v-model="account_name" class="form-control" name="account_name" placeholder="Enter your account name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Register!</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        account_name: this.account_name,
        email: this.email,
        password: this.password
      }).then(response => {
        this.$router.push({name: 'login'})
      })
    }
  }

}
</script>
