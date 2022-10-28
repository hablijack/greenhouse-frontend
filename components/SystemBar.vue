<template>
    <v-system-bar color="#343a40" dark>
        <v-spacer/>
        <span style="margin-right: 10px;">
          {{wifiStrength}}% 
          <v-icon>{{wifiIcon}}</v-icon>
        </span>
        <span style="margin-right: 10px;">
          {{battery}}%
          <v-icon>{{batteryIcon}}</v-icon>
        </span>
        <span style="margin-right: 10px;">
          {{databaseFillmentState}}% 
          <v-icon>{{databaseIcon}}</v-icon>
        </span>
        <span>{{currentTime}}</span>
    </v-system-bar>
</template>

<script>
export default {
  name: "SystemBar",
  fetchOnServer: true,
  data() {
    return {
      currentTime: "",
      wifiStrength: 0,
      battery: 0,
      databaseFillmentState: 0,
    };
  },
  created() {
    this.calculateCurrentTime();
    setInterval(this.calculateCurrentTime, 10000);
  },

  async fetch() {
    const dbStats = await fetch(`https://${this.$config.domain}/api/database/stats`).then(res => res.json());
    const dbSize = dbStats.measurementSizeByte + dbStats.relayLogSizeByte;
    const FIVE_GB_IN_BYTE=5368709120;
    const percent = dbSize / (FIVE_GB_IN_BYTE/100);
    this.databaseFillmentState = Math.round(percent);
  },
  methods: {
    calculateCurrentTime: function(){
      const date = new Date();
      this.currentTime = date.toLocaleTimeString(
        ['de-DE'], 
        {hour: '2-digit', minute: '2-digit'}
      );
    },
    updateMeasurements(measurements) {
      this.wifiStrength = measurements.wifi;
      this.battery = Math.round(measurements.battery);
    },
  },
  computed: {
    databaseIcon: function() {
      if(this.databaseFillmentState <= 12.5){
        return "mdi-circle-slice-1";
      } else if(this.databaseFillmentState <= 25) {
        return "mdi-circle-slice-2";
      } else if(this.databaseFillmentState <= 37.5) {
        return "mdi-circle-slice-3";
      } else if(this.databaseFillmentState <= 50) {
        return "mdi-circle-slice-4";
      } else if(this.databaseFillmentState <= 62.5) {
        return "mdi-circle-slice-5";
      } else if(this.databaseFillmentState <= 75) {
        return "mdi-circle-slice-6";
      } else if(this.databaseFillmentState <= 87.5) {
        return "mdi-circle-slice-7";
      } else {
        return "mdi-circle-slice-8";
      }
    },
    wifiIcon: function() {
      if(this.wifiStrength <= 25) {
        return "mdi-wifi-strength-1";
      } else if(this.wifiStrength <= 50) {
        return "mdi-wifi-strength-2";
      } else if(this.wifiStrength <= 75) {
        return "mdi-wifi-strength-3";
      } else {
        return "mdi-wifi-strength-4";
      }
    },
    batteryIcon: function() {
      if(this.battery <= 10) {
        return "mdi-battery-10";
      } else if(this.battery <= 20) {
        return "mdi-battery-20";
      } else if(this.battery <= 30) {
        return "mdi-battery-30";
      } else if(this.battery <= 40) {
        return "mdi-battery-40";
      } else if(this.battery <= 50) {
        return "mdi-battery-50";
      } else if(this.battery <= 60) {
        return "mdi-battery-60";
      } else if(this.battery <= 70) {
        return "mdi-battery-70";
      } else if(this.battery <= 80) {
        return "mdi-battery-80";
      } else if(this.battery <= 90) {
        return "mdi-battery-90";
      } else {
        return "mdi-battery";
      }
    }
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
}
</script>
