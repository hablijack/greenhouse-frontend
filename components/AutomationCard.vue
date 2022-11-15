<template>
    <v-expansion-panel :loading="isLoading">

        <v-expansion-panel-header>
            <v-row no-gutters>
                <v-col cols="1">
                    <v-icon size="30">mdi-circle</v-icon>
                </v-col>
                <v-col cols="11" style="font-size: 20px;">
                    <v-icon size="30">{{ icon }}</v-icon>
                    {{headline}}
                </v-col>
            </v-row>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
            <div class="mb-6">
                {{ description }}
            </div>
            <v-card class="mb-6" :color="timeCardColor">
                <v-card-title>
                    Zeitsteuerung:
                    <v-spacer/>
                    <ToggleButton
                        :id="'time' + id"
                        color="gray"
                        labelEnableText="AN"
                        labelDisableText="AUS"
                        @change="timeTriggerSwitchEvent"
                    />
                </v-card-title>
                <v-card-text>
                    <v-select
                        hide-details
                        :items="dayRules"
                        label="Tages Regel"
                        class="mb-6"
                        :disabled="!timeTriggerEnabled"
                    />
                    <v-select
                        hide-details
                        :items="hourRules"
                        label="Stunden Regel"
                        class="mb-6"
                        :disabled="!timeTriggerEnabled"
                    />
                    <v-select
                        hide-details
                        :items="minuteRules"
                        label="Aktivierungsdauer"
                        :disabled="!timeTriggerEnabled"
                    />
                </v-card-text>
            </v-card>
            <v-card :color="conditionCardColor">
                <v-card-title>
                    Bedingungssteuerung:
                    <v-spacer/>
                    <ToggleButton
                        :id="'condition' + id"
                        color="gray"
                        labelEnableText="AN"
                        labelDisableText="AUS"
                        @change="conditionTriggerSwitchEvent"
                    />
                </v-card-title>
                <v-card-text>
                    <v-select
                        hide-details
                        :items="items"
                        label="Trigger Sensor"
                        class="mb-5"
                        :disabled="!conditionTriggerEnabled"
                    />
                </v-card-text>
            </v-card>
            <v-btn 
                color="primary"
                @click="saveClick" 
                :disabled="!saveButtonEnabled"
                class="mt-6"
                x-large>
                Speichern
            </v-btn>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    name: "AutomationCard",
    props: {
        id: {
            type: Number,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        headline: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            timeTriggerEnabled: false,
            conditionTriggerEnabled: false,
            saveButtonEnabled: false,
            isLoading: false,
            minuteRules: [
                'für 1 Minute', 
                'für 2 Minuten', 
                'für 5 Minuten', 
                'für 6 Minuten', 
                'für 7 Minuten', 
                'für 8 Minuten', 
                'für 10 Minuten', 
                'für 15 Minuten', 
                'für 30 Minuten'
            ],
            hourRules: [
                'Stündlich von 8 - 18 Uhr', 
                'alle 2 Stunden von 8 - 18 Uhr',                
                'um 08, 10, 11, 12, 13, 17, 18 Uhr',
                'Mittags',
                'Morgens',
                'Abends',
                'Morgens und Abends',
                'Morgens, Mittags und Abends'
            ],
            dayRules: [
                'Täglich',
                'Alle 2 Tage',
                'Wöchentlich'            
            ]
        };
    },
    methods: {
        saveClick: async function () {
            console.log("save clicked");
        },
        conditionTriggerSwitchEvent(newValue) {
            this.conditionTriggerEnabled = newValue;
        },
        timeTriggerSwitchEvent(newValue) {
            this.timeTriggerEnabled = newValue;
        },
    },
    computed: {
        timeCardColor() {
            if(this.timeTriggerEnabled) {
                return "transparent";
            } else {
                return "#F0F0F0";
            }
        },
        conditionCardColor() {
            if(this.conditionTriggerEnabled) {
                return "transparent";
            } else {
                return "#F0F0F0";
            }
        }
    }
}
</script>
