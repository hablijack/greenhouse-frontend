<template>
    <v-navigation-drawer app dark absolute color="#343a40">
        <v-list>
            <v-list-item>
                 <img width="220" src="~/assets/green_sphere.gif" />
            </v-list-item>
            <v-list-item style="text-shadow: 2px 0px 2px black; color: #5cad8a; font-weight: bold; font-size: 26px; font-family: 'Orbitron'">
                <v-list-item-avatar class="mr-2">
                    <img src="~/assets/logo.png" />
                </v-list-item-avatar>
                Greenhouse
            </v-list-item>
        </v-list>

        <v-divider/>

        <v-list nav dense>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-toggle-switch</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Control</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-chart-areaspline</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">History</v-list-item-title>
            </v-list-item>
            <v-divider/>
        </v-list>

        <template v-slot:append>
            <v-list-item v-if="$auth.$state.loggedIn">
                <v-list-item-content>
                    <v-btn @click="$auth.logout()" to="/" >
                        <v-icon>mdi-logout</v-icon>
                        logout
                    </v-btn>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link v-if="$auth.$state.loggedIn">
                <v-list-item-avatar class="mr-2" style="backgroundColor: #272727; borderColor: white;">
                    <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        {{ $auth.user.nickname.split('.').join(' ') }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ $auth.user.name }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider/>
            <v-list-item style="min-height: 20px;">
                <v-list-item-subtitle class="ma-3" style="align-items: center;">
                    <i>© Copyright 2022 Greenhouse</i>
                </v-list-item-subtitle>
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
