<template>
  <span
    v-html="
      katex.renderToString(c, {
        throwOnError: false,
      })
    "
    class="equation"
    ref="span"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'

export default defineComponent({
  props: {
    c: String,
  },
  data() {
    return {
      katex,
    }
  },
})
</script>
