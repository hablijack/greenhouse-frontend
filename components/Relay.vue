<template>
  <v-card :v-bind="value" :dark="value" :style="relayStyle">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline">{{ name }}</div>
        <v-list-item-title style="height: auto">
          <ToggleButton
            :id="id"
            :defaultState="initialValue"
            :color="color"
            labelEnableText="AN"
            labelDisableText="AUS"
            @change="toggleButtonChangedEvent"
          />
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="120">
        <v-icon :v-bind="value" :color="value ? 'white' : '#343a40'" size="120">
          {{ icon }}
        </v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "Relay",
  props: ["id", "name", "initialValue", "description", "icon", "color"],
  data() {
    return {
      value: this.initialValue || false,
    };
  },
  computed: {
    relayStyle() {
      if (this.value) {
        return "background-color: ".concat(this.color);
      }
    },
  },
  methods: {
    toggleButtonChangedEvent(newValue) {
      this.value = newValue;
    },
  },
};
</script>
