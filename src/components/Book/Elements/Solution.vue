<template>
  <div>
    <div>
      <div class="button-show solution" @click="hide = !hide">
        <ic icon="feather-pointed" />Rozwiązanie
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
