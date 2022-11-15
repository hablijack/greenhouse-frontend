<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <AutomationCard 
            v-for="(relay,i) in relays" :key="i"
            :id="relay.id"
            :icon="relay.icon" 
            :headline="relay.name" 
            :description="relay.description"
          />
        </v-expansion-panels>
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
