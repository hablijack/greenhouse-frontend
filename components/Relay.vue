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
            :style="transmitting ? 'display: none' : 'display: block'"
            labelEnableText="AN"
            labelDisableText="AUS"
            @change="toggleButtonChangedEvent"
          />
          <v-progress-linear
            :color="value ? 'white' : color"
            style="width: 100%"
            indeterminate
            rounded
            height="55"
            v-if="transmitting"
          />
        </v-list-item-title>
        <v-list-item-subtitle>
          <div style="height: 34px">
            {{ description }}
          </div>
        </v-list-item-subtitle>
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
      transmitting: false,
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
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    toggleButtonChangedEvent(newValue) {
      this.transmitting = true;
      this.$axios
        .$post(`https://${this.$config.domain}/api/relay/${this.id}/switch`, {
          initiator: this.$auth.user.nickname,
          newValue: newValue,
        })
        .then(() => {
          this.transmitting = false;
          this.value = newValue;
        });
    },
  },
};
</script>
