<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="sensor in sensors.slice(0, 4)"
        v-bind:key="sensor.name + sensor.identifier"
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <MeasureCard
          :headline="sensor.name"
          :measurement="measurements[sensor.identifier]"
          :unit="sensor.unit"
          :description="sensor.description"
          :icon="sensor.icon"
          :minAlarmValue="sensor.minAlarmValue"
          :maxAlarmValue="sensor.maxAlarmValue"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="12" md="12" lg="9" style="position: relative">
        <v-row
          dense
          justify="end"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 10px;
            z-index: 20;
            width: 100%;
          "
        >
          <v-col v-for="relay in relays" v-bind:key="relay.name">
            <MiniRelay
              :color="relay.value ? relay.color : '#343a40'"
              :name="relay.identifier"
              :icon="relay.icon"
            />
          </v-col>
        </v-row>
        <v-card img="/img/webcam_current.jpg" min-height="632" />
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="3">
        <v-row dense>
          <v-col
            v-for="sensor in sensors.slice(4, 8)"
            v-bind:key="sensor.name"
            cols="12"
            sm="12"
            md="6"
            lg="12"
          >
            <MeasureCard
              :headline="sensor.name"
              :measurement="measurements[sensor.identifier]"
              :unit="sensor.unit"
              :description="sensor.description"
              :icon="sensor.icon"
              color="#5cad8a"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        v-for="sensor in sensors.slice(8, 12)"
        v-bind:key="sensor.name"
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <MeasureCard
          :headline="sensor.name"
          :measurement="measurements[sensor.identifier]"
          :unit="sensor.unit"
          :description="sensor.description"
          :icon="sensor.icon"
          color="#5cad8a"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MiniRelay from "~/components/MiniRelay.vue";
export default {
  name: "Dashboard",
  middleware: ["auth"],
  data: () => ({
    measurements: {},
  }),
  async asyncData({ $axios, $config }) {
    const sensors = await $axios.$get(`https://${$config.domain}/api/sensors`);
    const relays = await $axios.$get(`https://${$config.domain}/api/relays`);
    return { sensors, relays };
  },
  methods: {
    updateMeasurements(measurements) {
      this.measurements = measurements;
    },
  },
  mounted() {
    const socket = new WebSocket(
      `wss://${this.$config.domain}/api/sensors/measurements/socket`
    );
    let nuxtPage = this;
    socket.onmessage = function (message) {
      nuxtPage.updateMeasurements(JSON.parse(message.data));
    };
  },
  components: { MiniRelay },
};
</script>
