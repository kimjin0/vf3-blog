<!-- eslint-disable no-tabs -->
<template>
	<div id="event-handling">
		<p>{{ message }}</p>
		<button v-on:click="reverseMessage">Reverse Message</button>
	</div>
</template>
<script lag="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestVue',

  data () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage () {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }

})
</script>
