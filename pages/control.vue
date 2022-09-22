<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-row dense>
          <v-col cols="12">
            <Relay
              id="relay_line1"
              name="Bewässerung Linie 1"
              :initialValue="true"
              description="Bewässert gezielt in Wurzelnähe und damit sparsam, weil das Wasser genau da ankommt, wo es hin soll"
              icon="mdi-water"
              color="#0067AF"
            />
          </v-col>
          <v-col cols="12">
            <Relay
              id="relay_line2"
              name="Bewässerung Linie 2"
              :initialValue="false"
              description="Bewässert gezielt in Wurzelnähe und damit sparsam, weil das Wasser genau da ankommt, wo es hin soll"
              icon="mdi-water"
              color="#0067AF"
            />
          </v-col>
          <v-col cols="12">
            <Relay
              id="relay_line3"
              name="Bewässerung Linie 3"
              :initialValue="false"
              description="Bewässert gezielt in Wurzelnähe und damit sparsam, weil das Wasser genau da ankommt, wo es hin soll"
              icon="mdi-water"
              color="#0067AF"
            />
          </v-col>
          <v-col cols="12">
            <Relay
              id="relay_line4"
              name="Bewässerung Linie 4"
              :initialValue="false"
              description="Bewässert gezielt in Wurzelnähe und damit sparsam, weil das Wasser genau da ankommt, wo es hin soll"
              icon="mdi-water"
              color="#0067AF"
            />
          </v-col>
          <v-col cols="12">
            <Relay
              id="relay_light"
              name="Pflanzenlicht"
              :initialValue="false"
              description="Mit der LED-Decken-Beleuchtung kann das Wachstum und die Qualität von Gemüse gesteigert werden."
              icon="mdi-white-balance-sunny"
              color="#A092EB"
            />
          </v-col>
          <v-col cols="12">
            <Relay
              id="relay_fans"
              name="Ventilatoren"
              :initialValue="false"
              description="Durch die richtige Verwendung von Ventilatoren wird die Luft rund um die Pflanze sanft vermischt, wodurch krankheitsfördernde Bereiche mit hoher Luftfeuchtigkeit beseitigt werden und eine starke Transpiration gefördert wird."
              icon="mdi-fan"
              color="#C89542"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6">
        <v-card style="height: 100%">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">Logbuch:</div>
              <v-simple-table dark dense style="background-color: #343a40">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Zeit</th>
                      <th class="text-left">Event</th>
                      <th class="text-left">Initiator</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in logs" :key="log.event">
                      <td>{{ log.timestamp | formatDateTime }}</td>
                      <td>{{ log.event }}</td>
                      <td>{{ log.initiator }}</td>
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
  data() {
    return {
      logs: [
        {
          event: "Started watering on Linie1",
          timestamp: new Date(),
          initiator: "Christoph",
        },
        {
          event: "Started watering on Linie1",
          timestamp: new Date(),
          initiator: "Christoph",
        },
      ],
    };
  },
};
</script>
