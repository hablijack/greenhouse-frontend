<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-row dense>
          <v-col v-for="relay in relays" v-bind:key="relay.name" cols="12">
            <Relay
              :id="relay.identifier"
              :name="relay.name"
              :initialValue="relay.value"
              :description="relay.description"
              :icon="relay.icon"
              :color="relay.color"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card style="height: 100%">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">Logbuch:</div>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Zeitpunkt</th>
                      <th class="text-left">Initiator</th>
                      <th class="text-left">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in logs" :key="log.id">
                      <td>{{ log.timestamp | formatDateTime }}</td>
                      <td>{{ log.initiator }}</td>
                      <td>
                        hat
                        <v-chip
                          label
                          outlined
                          :color="log.value ? 'green' : 'gray'"
                          >{{ log.relay.name }}</v-chip
                        >
                        {{ log.value ? "angeschaltet" : "ausgeschaltet" }}
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Steuerung",
  middleware: ["auth"],
  async asyncData({ $axios, $config }) {
    const relays = await $axios.$get(`https://${$config.domain}/api/relays`);
    return { relays };
  },
  data: () => ({
    logs: [],
  }),
  methods: {
    updateRelayOnWebsocketUpdate(newLogs) {
      this.logs.unshift(...newLogs);
      this.logs.pop();
    },
  },
  mounted() {
    const socket = new WebSocket(
      `wss://${this.$config.domain}/api/relays/socket/${this.$auth.user.nickname}`
    );
    let nuxtPage = this;
    socket.onmessage = function (message) {
      nuxtPage.updateRelayOnWebsocketUpdate(JSON.parse(message.data));
    };
  },
};
</script>
