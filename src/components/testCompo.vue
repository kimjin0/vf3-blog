<template>
    <div>
        text : {{ name }}
    </div>
</template>
<script lag="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'testCompo',
  props: {
    name: {
      type: String,
      default: () => 'default'
    }
  },
  setup () {
    //
  }
})
</script>
