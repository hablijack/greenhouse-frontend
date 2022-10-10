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
      <v-col
        v-for="(child, index) in architecture.children"
        :key="child.name + index"
        cols="12"
        sm="12"
        md="12"
        lg="4"
      >
        <v-card>
          <v-card-title :style="sateliteStyle(child.online)"
            >{{ child.name }}:</v-card-title
          >
          <v-card-text class="mt-5">
            <div>{{ child.description }}</div>
            <div><strong>IP: </strong>{{ child.ip }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn dark color="#343a40">Edit</v-btn>
            <v-btn dark color="#343a40">Healthcheck</v-btn>
            <v-btn dark color="#343a40">Interface</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sateliten",
  methods: {
    sateliteStyle(online) {
      return "color: white; background-color: ".concat(
        online ? "#5cad8a" : "#EA8162"
      );
    },
  },
  data() {
    return {
      architecture: {
        name: "Server",
        imageUrl: "server.png",
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
