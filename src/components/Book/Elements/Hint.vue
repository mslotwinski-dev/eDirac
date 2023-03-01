<template>
  <div class="static hint" :class="{ hide }">
    <div>
      <div class="button-show" @click="hide = !hide">
        <ic icon="lightbulb" />Wskazówka
      </div>
    </div>
    <div class="spoiler">
      <div class="abs">
        <slot />
      </div>
      <div class="placeholder">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      hide: true,
    }
  },
})
</script>
