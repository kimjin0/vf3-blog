<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
const justify = ref('justify-start')
const justifys = [
  'start',
  'center',
  'end',
  'aroud',
  'between',
  'evenly'
].map(v => 'justify-' + v)
</script>
<template>
    <q-card>
        <q-toolbar>
            <q-toobar-title>row</q-toobar-title>
            <q-select
                v-model="justify"
                :options="justifys"
            />
        </q-toolbar>
        <q-card-select>
            {{ justify }}, {{  justifys }}
        </q-card-select>
        <div class="row" :class="justify">
            <div v-for="i in 7" :key="i">
                <q-avatar
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                />
            </div>
        </div>
    </q-card>
</template>
