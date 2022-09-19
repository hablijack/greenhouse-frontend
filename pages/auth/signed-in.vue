<template>
<v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <v-progress-circular
          :size="300"
          :width="15"
          color="#5cad8a"
          indeterminate
        >
            <img width="90%" src="/img/logo.png" />
        </v-progress-circular>
      </v-col>
      <v-col cols="12" align="center">
        <h1 style="color: #5cad8a;">Anmeldung in Arbeit ...</h1>
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
