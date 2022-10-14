<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from 'vue'
const justify = ref('justify-start')
const justifys = [
  'start',
  'center',
  'end',
  'aroud',
  'between',
  'evenly'
].map(v => 'justify-' + v)

const item = ref('items-start')
const items = ['items-start', 'items-center', 'items-end']
const rowClass = computed(() => [justify.value, item.value].join(' '))
</script>
<template>
    <q-card>
        <q-toolbar>
            <!-- <q-toobar-title>row</q-toobar-title> -->
            <q-select
                v-model="justify"
                :options="justifys"
            />
            <q-select
                v-model="item"
                :options="items"
            />
        </q-toolbar>
        <q-card-select>
           {{  rowClass }}
        </q-card-select>
        <div class="row"
            :class="rowClass"
        >
            <div v-for="i in 7" :key="i">
                <q-avatar
                    :size="`${i * 10 + 30}px`"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                />
            </div>
        </div>
    </q-card>
</template>
