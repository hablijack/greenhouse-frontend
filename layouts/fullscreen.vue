<template>
  <v-app style="background-color: #343a40; color: white;">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "FullscreenLayout",
  data() {
    return {
      title: "Vuetify.js",
      drawer: null
    };
  },
}
</script>
