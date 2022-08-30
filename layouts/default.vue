<template>
  <v-app>
    <Header></Header>
    <v-main>
      <div class="main-content">
        <Nuxt />
      </div>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "Vuetify.js"
    };
  },
  components: { Header }
}
</script>
