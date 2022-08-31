<template>
  <v-app style="background-color: #dfdfdf">
    <Navigation/>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Vuetify.js",
      drawer: null
    };
  },
  components: { Navigation }
}
</script>
