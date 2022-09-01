<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <v-col cols="2">
                <img width="100%" src="~/assets/logo.png" />
            </v-col>
            <v-col cols="10" style="text-shadow: 4px 0px 7px black; color: #5cad8a; font-weight: bold; font-size:8vw; font-family: 'Orbitron'">
                Greenhouse
            </v-col>
            <v-col cols="12" class="text-center">
                <h2>Jetzt anmelden:</h2>
                <v-btn x-large outlined elevation="16" color="#5cad8a" class="mt-3" to="/">Login mit Auth0 </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  layout: 'fullscreen',
  data() {
    return {

    }
  }
}
</script>