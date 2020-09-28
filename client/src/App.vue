<template>
  <v-app>

    <v-app-bar app>
      <navbar></navbar>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from './components/MainDashboard/Navbar'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
}
</script>
