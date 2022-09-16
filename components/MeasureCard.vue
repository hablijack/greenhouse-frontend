<template>
    <v-card :color=color dark>
        <v-list-item three-line>
            <v-list-item-content>
                <div class="text-overline">
                    {{  headline  }}
                </div>
                <v-list-item-title class="text-h3">
                     <v-progress-linear
                        color="white"
                        style="float: left; width: 100px; margin-right: 20px; margin-top: 15px;"
                        indeterminate
                        rounded
                        height="20"
                        v-if="!measurement"
                    ></v-progress-linear>
                    {{  measurement  }} {{ unit }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{  description  }}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="120">
                <v-icon size="120">{{ icon }}</v-icon>
            </v-list-item-avatar>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name: "MeasureCard",
    props: [
        'headline',
        'unit',
        'measurement',
        'icon',
        'description',
        'color'
    ],
    data() {
        return {

        }
    }
}
</script>
