<template>
    <v-navigation-drawer app dark absolute color="#343a40" style="height: 100%;">
        <v-list>
            <v-list-item>
                <img width="220" src="/img/green_sphere.gif" />
            </v-list-item>
            <v-list-item
                style="text-shadow: 2px 0px 2px black; color: #5cad8a; font-weight: bold; font-size: 26px; font-family: 'Orbitron'">
                <v-list-item-avatar class="mr-2">
                    <img src="/img/logo_shadow.png" />
                </v-list-item-avatar>
                Greenhouse
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list nav dense>
            <v-list-item to="/dashboard">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item to="/satelites">
                <v-list-item-icon>
                    <v-icon>mdi-home-automation</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Sateliten</v-list-item-title>
            </v-list-item>
            <v-list-item to="/control">
                <v-list-item-icon>
                    <v-icon>mdi-toggle-switch</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Steuerung</v-list-item-title>
            </v-list-item>
            <v-list-item to="/limits">
                <v-list-item-icon>
                    <v-icon>mdi-plus-minus-box</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Grenzwerte</v-list-item-title>
            </v-list-item>
            <v-list-item to="/automation">
                <v-list-item-icon>
                    <v-icon>mdi-cog-box</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Automatik</v-list-item-title>
            </v-list-item>
            <v-list-item to="/history">
                <v-list-item-icon>
                    <v-icon>mdi-chart-areaspline</v-icon>
                </v-list-item-icon>
                <v-list-item-title style="line-height: 2rem;" class="text-h6">Historie</v-list-item-title>
            </v-list-item>
            <v-divider class="mb-4" />
            <v-list-item v-if="$auth.$state.loggedIn">
                <v-list-item-content>
                    <v-btn @click="$auth.logout()" to="/">
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
            <v-divider />
            <v-list-item style="min-height: 20px;">
                <v-list-item-subtitle class="ma-3" style="align-items: center;">
                    <i>© Copyright 2022 Greenhouse</i>
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
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
