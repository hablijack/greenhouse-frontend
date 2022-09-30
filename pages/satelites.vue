<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" sm="12" md="12" lg="4">
        <v-card>
          <v-card-title>Sateliten:</v-card-title>
          <v-card-text>
            <client-only>
              <TreeChart v-bind="architecture" :json="architecture" />
            </client-only>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sateliten",
  data() {
    return {
      architecture: {
        name: "Server",
        image_url: "server.png",
        class: ["rootNode"],
        ip: "192.168.178.29:5550",
        online: true,
        children: [],
      },
    };
  },
  async fetch() {
    const satelites = await this.$axios.$get(
      `https://${this.$config.domain}/api/satelites`
    );
    this.architecture.children = satelites;
  },
  middleware: ["auth"],
};
</script>
