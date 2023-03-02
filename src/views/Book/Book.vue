<template>
  <div>
    <div class="moved" />
    <Online />
    <Ad />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Online from '@/components/Book/Online/Index.vue'
import Ad from '@/components/Shared/Ads/VerticalBig.vue'

export default defineComponent({
  components: {
    Online,
    Ad,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.content {
  width: 1600px;
  max-width: 99vw;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
