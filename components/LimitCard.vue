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
            <v-text-field 
                prepend-icon="mdi-arrow-collapse-down" 
                outlined 
                label="untere Grenze:"
                :value="minAlarmValue" 
                :suffix="unit"
                type="number" 
                @input="$emit('update:minAlarmValue', $event)" />
            <v-text-field 
                :value="maxAlarmValue" 
                prepend-icon="mdi-arrow-collapse-up" 
                outlined label="obere Grenze:"
                :suffix="unit" 
                type="number" 
                @input="$emit('update:maxAlarmValue', $event)" />
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
    name: "LimitCard",
    props: {
        id: {
            type: Number,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        unit: {
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
        minAlarmValue: {
            required: true,
        },
        maxAlarmValue: {
            required: true,
        },
    },
    data() {
        return {
            saveButtonEnabled: false,
            isLoading: false
        };
    },
    methods: {
        saveClick: async function () {
            this.isLoading = true;
            const sensor = await this.$axios.$get(`https://${this.$config.domain}/api/sensor/${this.id}`);
            sensor.minAlarmValue = parseInt(this.minAlarmValue);
            sensor.maxAlarmValue = parseInt(this.maxAlarmValue);
            const response = await this.$axios.$put(`https://${this.$config.domain}/api/sensor/${this.id}`, sensor);
            this.saveButtonEnabled = false;
            this.isLoading = false;
        }
    },
    watch: { 
      	minAlarmValue: function() { 
            this.saveButtonEnabled = true;
        },
        maxAlarmValue: function() {
            this.saveButtonEnabled = true;
        }
    }
}
</script>
