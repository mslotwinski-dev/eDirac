<template>
  <p><slot /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
p {
  margin-block-start: 0.75em;
  margin-block-end: 0.75em;
}
</style>
