<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="relay in relays" v-bind:key="relay.name" cols="12">
        <AutomationCard 
          :icon="relay.icon" 
          :headline="relay.name" 
          :description="relay.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Automation',
  middleware: ['auth'],
  async asyncData({ $axios, $config }) {
    const relays = await $axios.$get(`https://${$config.domain}/api/relays`);
    return { relays };
  }
};
</script>
