<template>
    <v-expansion-panel :loading="isLoading">

        <v-expansion-panel-header>
            <v-row no-gutters>
                <v-col cols="1">
                    <v-icon :color="activeIconColor" size="30">mdi-circle</v-icon>
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
                <v-divider/>
            </div>
            <div class="mt-8 mb-3">
                <span class="text-h6">Zeitsteuerung:</span>
                <ToggleButton
                    :id="'time' + id"
                    color="#5cad8a"
                    :defaultState="initialTimeTriggerActive"
                    labelEnableText="AN"
                    labelDisableText="AUS"
                    @change="timeTriggerSwitchEvent"
                />
            </div>
            <v-card class="mb-6" outlined :disabled="!timeTriggerEnabled">
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
            <div class="mt-8 mb-3">
                <span class="text-h6">Bedingungssteuerung:</span>
                <ToggleButton
                    :id="'condition' + id"
                    :defaultState="initialConditionTriggerActive"
                    color="#5cad8a"
                    labelEnableText="AN"
                    labelDisableText="AUS"
                    @change="conditionTriggerSwitchEvent"
                />
            </div>
            
            <v-card outlined :disabled="!conditionTriggerEnabled">
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
        initialTimeTriggerActive: {
            type: Boolean,
            required: true,
        },
        initialConditionTriggerActive: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            timeTriggerEnabled: this.initialTimeTriggerActive,
            conditionTriggerEnabled: this.initialConditionTriggerActive,
            saveButtonEnabled: false,
            isLoading: false,
            minuteRules: [
                'f??r 1 Minute', 
                'f??r 2 Minuten', 
                'f??r 5 Minuten', 
                'f??r 6 Minuten', 
                'f??r 7 Minuten', 
                'f??r 8 Minuten', 
                'f??r 10 Minuten', 
                'f??r 15 Minuten', 
                'f??r 30 Minuten'
            ],
            hourRules: [
                'St??ndlich von 8 - 18 Uhr', 
                'alle 2 Stunden von 8 - 18 Uhr',                
                'um 08, 10, 11, 12, 13, 17, 18 Uhr',
                'Mittags',
                'Morgens',
                'Abends',
                'Morgens und Abends',
                'Morgens, Mittags und Abends'
            ],
            dayRules: [
                'T??glich',
                'Alle 2 Tage',
                'W??chentlich'            
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
        activeIconColor()  {
            if(this.timeTriggerEnabled || this.conditionTriggerEnabled) {
                return "#5cad8a";
            } else {
                return "gray";
            }
        }
    }
}
</script>
