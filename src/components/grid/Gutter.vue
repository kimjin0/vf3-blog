<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
const gutter = ref('q-gutter-sm')
const gutters = ['xs', 'sm', 'md', 'lg', 'xl'].map(v => 'q-gutter-' + v)
</script>
<template>
    <q-card>
        <q-toolbar>
            <q-toolbar-title>guttr</q-toolbar-title>
            <q-select
                v-model="gutter"
                :options="gutters"
            />
        </q-toolbar>
        <q-card-section>
            {{ gutter }} {{ gutters }}
        </q-card-section>
    </q-card>
    <div :class="gutter">
        <q-btn
             v-for="n in 7" :key="`xs${n}`"
             color="brown"
             label="Button"
        />
    </div>
</template>
