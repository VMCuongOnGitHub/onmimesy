<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">WELCOME</h1>
        <h1 class="text-center">{{warning}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */


export default {
  data(){
    return{
      warning: "Please login to use"
    }
  }
}
</script>
