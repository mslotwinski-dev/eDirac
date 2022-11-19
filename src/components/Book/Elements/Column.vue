<template>
  <section :style="{ width }" :class="{ grow, dark }">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    dark: String,
    width: String,
    grow: String,
  },
})
</script>

<style lang="scss" scoped>
.grow {
  flex-grow: 1;
}

.dark {
  backdrop-filter: brightness(0.95);
}
</style>
