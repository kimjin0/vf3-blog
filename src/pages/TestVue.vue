<!-- eslint-disable no-tabs -->
<template>
<div>
	<testCompo test="내가 주는 값 받아">
		1234
	</testCompo>
</div>
</template>
<script lag="ts">
import { defineComponent } from 'vue'
import testCompo from 'components/testCompo.vue'
export default defineComponent({
  name: 'TestVue',
  components: { testCompo },
  setup () {
    //
  }
})
</script>
