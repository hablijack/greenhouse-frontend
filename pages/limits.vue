<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="sensor in sensors" v-bind:key="sensor.name+sensor.unit" cols="12" sm="12" md="4" lg="4">
        <LimitCard
          :id="sensor.id"
          :headline="sensor.name"
          :max-alarm-value.sync="sensor.maxAlarmValue"
          :icon="sensor.icon"
          :min-alarm-value.sync="sensor.minAlarmValue"
          :unit="sensor.unit"
          :key="sensor.name"
          :description="sensor.description"
          :value="sensor.value" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Grenzwerte",
  middleware: ["auth"],
  async asyncData({ $axios, $config }) {
    const sensors = await $axios.$get(`https://${$config.domain}/api/sensors`);
    return { sensors };
  },
};
</script>
