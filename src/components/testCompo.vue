<template>
    <div>
        text : {{ name }}
    </div>
    <div>
        upper : {{ name.toUpperCase() }}
    </div>
    <div>
        computed : {{ upper }}
    </div>
</template>
<script lag="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'testCompo',
  props: {
    name: {
      type: String,
      default: () => 'default'
    }
  },
  setup (props) {
    console.log(props)
    const upper = computed(
      () => props.name.toUpperCase()
    )
    return { upper }
    //
  }
})
</script>
