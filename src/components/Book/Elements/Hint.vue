<template>
  <div>
    <div>
      <div class="button-show hint" @click="hide = !hide">
        <ic icon="lightbulb" />Wskazówka
      </div>
    </div>
    <div class="spoiler" :class="{ hide }">
      <div>
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
