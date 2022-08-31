<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="3">
        <MeasureCard 
          headline='Luft innen' 
          measurement="21,7°C"
          description="Themperatur innerhalb des Gewächshauses" 
          icon="mdi-thermometer"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Luft außen' 
          measurement="25,2°C"
          description="Themperatur außerhalb des Gewächshauses" 
          icon="mdi-thermometer"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Boden' 
          measurement="19,1°C"
          description="Themperatur der Erde im Gewächshaus" 
          icon="mdi-thermometer"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Batterie' 
          measurement="100%"
          description="Ladezustand der Photovoltaik-Batterie" 
          icon="mdi-battery"
          color="#5cad8a" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="9">
        <v-card img="/_nuxt/assets/webcam_current.jpg" min-height="632" />
      </v-col>
      <v-col cols="3">
        <v-row dense>
          <v-col>
            <MeasureCard 
              headline='Luft innen' 
              measurement="72%"
              description="Luftfeuchte im Gewächshaus" 
              icon="mdi-water"
              color="#5cad8a" />
          </v-col>
        
          <v-col>
          <MeasureCard 
            headline='Wifi' 
            measurement="62%"
            description="Wlan Empfangsstärke im Gewächshaus" 
            icon="mdi-wifi"
            color="#5cad8a" />
          </v-col>

          <v-col>
            <MeasureCard 
              headline='Helligkeit' 
              measurement="62%"
              description="Intensität der Sonneneinstrahlung im Gewächshaus" 
              icon="mdi-white-balance-sunny"
              color="#5cad8a" />
          </v-col>
          <v-col>
            <MeasureCard 
              headline='CO2' 
              measurement="406ppa"
              description="CO2 sättigung im Gewächshaus" 
              icon="mdi-soundcloud"
              color="#5cad8a" />
            </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="3">
        <MeasureCard 
          headline='Bodenfeuchte Line1' 
          measurement="0%"
          description="Bodenfeuchte in Pflanzspur 1" 
          icon="mdi-water"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Bodenfeuchte Line2' 
          measurement="0%"
          description="Bodenfeuchte in Pflanzspur 2" 
          icon="mdi-water"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Bodenfeuchte Line3' 
          measurement="0%"
          description="Bodenfeuchte in Pflanzspur 3" 
          icon="mdi-water"
          color="#5cad8a" />
      </v-col>
      <v-col cols="3">
        <MeasureCard 
          headline='Bodenfeuchte Line4' 
          measurement="0%"
          description="Bodenfeuchte in Pflanzspur 4" 
          icon="mdi-water"
          color="#5cad8a" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {

    }
  }
}
</script>
