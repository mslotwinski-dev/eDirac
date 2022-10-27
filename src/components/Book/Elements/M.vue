<template>
  <span
    v-html="
      katex.renderToString(c || s, {
        throwOnError: false,
      })
    "
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'

export default defineComponent({
  props: {
    c: String,
    s: String,
  },
  data() {
    return {
      katex,
    }
  },
})
</script>
