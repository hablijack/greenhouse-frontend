<template>
  <v-container fluid>
    <v-row>
      <v-col align="center">
        <v-progress-circular
          :size="120"
          :width="12"
          color="#5cad8a"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <h1 color="white">Anmeldung in Arbeit ...</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignedIn',
  layout: 'fullscreen',
  data() {
    return {

    }
  }
}
</script>
