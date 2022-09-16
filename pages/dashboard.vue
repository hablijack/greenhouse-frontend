<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="sensor in sensors.slice(0,4)" v-bind:key="sensor.name" cols="12" sm="12" md="6" lg="3">
        <MeasureCard 
          :headline="sensor.name"
          :measurement="measurements[sensor.identifier]"
          :unit="sensor.unit"
          :description="sensor.description" 
          :icon="sensor.icon"
          color="#5cad8a" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" sm="12" md="12" lg="9">
        <v-card :img="require(`~/assets/webcam_current.jpg`)" min-height="632" />
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="3">
        <v-row dense>
          <v-col v-for="sensor in sensors.slice(4,8)" v-bind:key="sensor.name" cols="12" sm="12" md="6" lg="12">
            <MeasureCard 
              :headline="sensor.name"
              :measurement="measurements[sensor.identifier]"
              :unit="sensor.unit"
              :description="sensor.description" 
              :icon="sensor.icon"
              color="#5cad8a" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="sensor in sensors.slice(8,12)" v-bind:key="sensor.name" cols="12" sm="12" md="6" lg="3">
        <MeasureCard 
          :headline="sensor.name"
          :measurement="measurements[sensor.identifier]"
          :unit="sensor.unit"
          :description="sensor.description" 
          :icon="sensor.icon"
          color="#5cad8a" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: ['auth'],
  data: () => ({
    measurements: {},
  }),
  async asyncData({ $axios, $config }) {
    const sensors = await $axios.$get(`${$config.backendUrl}/api/sensors`);
    const measurements = await $axios.$get(`${$config.backendUrl}/api/sensors/measurements/live`);
    return { sensors, measurements };
  },
  methods: {
    updateMeasurements(measurements) {
      console.log(measurements);
      this.measurements = measurements;
    },
  },
  mounted() {
    const socket = new WebSocket("ws://localhost:8080/api/sensors/measurements/socket");
    let nuxtPage = this;
    console.log("mounted")
    socket.onmessage = function (message) {
      nuxtPage.updateMeasurements(JSON.parse(message.data));
    };
  },
};
</script>
