<template>
  <v-app style="background-color: #dfdfdf">
    <SystemBar/>
    <Navigation/>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Vuetify.js",
      drawer: null, 
    };
  }
}
</script>
