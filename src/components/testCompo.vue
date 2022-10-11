<template>
    <div>
        slot out {{  test }}
        <slot></slot>
    </div>
</template>
<script lag="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'testCompo',
  props: ['test'],
  setup () {
    //
  }
})
</script>
