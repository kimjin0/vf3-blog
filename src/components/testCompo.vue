<template>
    <div>
        slot out {{  test }}
        title {{ title }}
        <slot></slot>
    </div>
</template>
<script lag="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'testCompo',
  props: ['test', 'title'],
  setup () {
    //
  }
})
</script>
