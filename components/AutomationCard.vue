<template>
    <v-card :loading="isLoading">
        <v-card-title>
            <v-icon size="30" class="mr-3">{{ icon }}</v-icon>
            {{ headline }}
        </v-card-title>
        <v-card-subtitle>
            {{ description }}
        </v-card-subtitle>
        <v-card-text>
            <v-card outlined class="mb-6" style="background-color: #F0F0F0F0;">
                <v-card-title>
                    Zeitsteuerung:
                    <v-spacer/>
                    <ToggleButton
                        :color="color"
                        labelEnableText="AN"
                        labelDisableText="AUS"
                    />
                </v-card-title>
                <v-card-text>
                    <v-select
                        hide-details
                        :items="dayRules"
                        label="Tages Regel"
                        class="mb-6"
                    />
                    <v-select
                        hide-details
                        :items="hourRules"
                        label="Stunden Regel"
                        class="mb-6"
                    />
                    <v-select
                        hide-details
                        :items="minuteRules"
                        label="Aktivierungsdauer"
                    />

                </v-card-text>
            </v-card>
            <v-card outlined style="background-color: #F0F0F0F0;">
                <v-card-title>
                    Bedingungssteuerung:
                    <v-spacer/>
                    <ToggleButton
                        :color="color"
                        labelEnableText="AN"
                        labelDisableText="AUS"
                    />
                </v-card-title>
                <v-card-text>
                    <v-select
                        hide-details
                        :items="items"
                        label="Trigger Sensor"
                        class="mb-5"
                    />
                    
                </v-card-text>
            </v-card>
        </v-card-text>
        <v-card-actions style="text-align: right;">
            <v-btn 
                color="primary"
                @click="saveClick" 
                :disabled="!saveButtonEnabled" 
                x-large>
                Speichern
            </v-btn>
        </v-card-actions>
    </v-card>
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
        }
    }
}
</script>
