<!-- eslint-disable no-tabs -->
<template>
<q-page padding>
    <q-card>
        <q-card-section>
            name : {{  addedText }}
        </q-card-section>
        <q-card-section>
            <q-input v-model="name"></q-input>
        </q-card-section>
        <q-card-actions>
            <q-btn flat label="add" @click="add"></q-btn>
        </q-card-actions>
    </q-card>
</q-page>
</template>
<script lag="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestVue',
  data () {
    return {
      name: 'kimjin0'
    }
  },
  computed: {
    addedText () {
      return this.name + ' ^^'
    }
  },
  methods: {
    add () {
      this.name += ' add'
    }
  }
})
</script>
