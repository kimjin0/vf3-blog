<!-- eslint-disable no-tabs -->
<template>
<q-page padding>
    <q-card>
        <q-card-section>
            name : {{  addedText }}
        </q-card-section>
        <q-card-section>
            <q-input v-model="text"></q-input>
        </q-card-section>
        <q-card-actions>
            <q-btn flat label="add" @click="add"></q-btn>
        </q-card-actions>
        <q-card-section>
            compo...
            <TestCompo :name="text" />
        </q-card-section>
    </q-card>
</q-page>
</template>
<script lag="ts">
import { defineComponent, ref, computed, provide } from 'vue'
import TestCompo from 'components/TestCompo.vue'
export default defineComponent({
  name: 'TestVue',
  components: { TestCompo },
  // Option API
  //   data () {
  //     return {
  //       name: 'kimjin0'
  //     }
  //   },
  //   computed: {
  //     addedText () {
  //       return this.name + ' ^^'
  //     }
  //   },
  //   methods: {
  //     add () {
  //       this.name += ' add'
  //     }
  //   }
  setup () {
    const text = ref('kimjin0')
    // computed 축약
    const addedText = computed(() => text.value + ' ^^')

    // methods 축약
    const add = () => {
      text.value += ' add'
    }

    provide('name', text)

    return {
      text,
      addedText,
      add
    }
  }
})
</script>
