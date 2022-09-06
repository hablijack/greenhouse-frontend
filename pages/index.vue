<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <v-col cols="12" style="text-align: center; text-shadow: 4px 0px 7px black; color: #5cad8a; font-weight: bold; font-size:8vw; font-family: 'Orbitron'">
                <img src="~/assets/logo_shadow.png" />
                Greenhouse
            </v-col>
            <v-col cols="12" class="text-center">
                <h2>Jetzt anmelden:</h2>
                <v-btn @click="$auth.loginWith('auth0')" x-large outlined elevation="16" color="#5cad8a" class="mt-3" to="/">Login mit Auth0 </v-btn>
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