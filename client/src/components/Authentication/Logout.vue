<template>
  <div>
    <h1>Bye</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created() {
    this.$store.dispatch('deleteToken')
      .then(response => {
        this.$router.push({ name: 'home' })
      })
  }
}
</script>

