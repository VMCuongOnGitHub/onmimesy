<template>
  <div class="container">
    <h1>{{chat_id}}</h1>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data () {
      return {
        chat_id: this.$route.params.chat_id
      }
    },
    methods: {

    }
  }
</script>
