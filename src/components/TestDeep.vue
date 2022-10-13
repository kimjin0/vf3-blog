<template>
    <div>
        {{ name }}
    </div>
</template>
<script lag="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'TestDeep',
  setup () {
    const name = inject('name')
    return {
      name
    }
  }
//   props: {
//     name: {
//       type: String,
//       default: () => 'default'
//     }
//   }
})
</script>
