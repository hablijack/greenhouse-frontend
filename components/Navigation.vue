<template>
    <v-navigation-drawer v-model="drawer" app dark absolute color="#343a40">
        <v-list>
            <v-list-item style="color: #40C840; font-weight: bold; font-size: 26px; font-family: 'Orbitron'">
                <v-list-item-avatar class="mr-2">
                    <img src="~/assets/logo.png" />
                </v-list-item-avatar>
                Greenhouse
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Christoph Habel
                    </v-list-item-title>
                    <v-list-item-subtitle>christoph.habel@posteo.de</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider color="white"></v-divider>

        <v-list nav dense>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-h6">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-toggle-switch</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-h6">Control</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-chart-areaspline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-h6">History</v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <v-list-item class="pa-6">
                <v-list-item-content><img width="70" src="~/assets/greenhouse.png" /></v-list-item-content>
                <v-list-item-title>Greenhouse 2022</v-list-item-title>
            </v-list-item>
        </template>


    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {

        }
    }
}
</script>
