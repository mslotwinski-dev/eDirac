<template>
  <div class="def">
    <b v-html="$t(`sciences.${title}`)" /> –
    <span v-html="$t(`sciences.defs.${title}`)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.def {
  width: 1000px;
  max-width: 90vw;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  padding: 10px;
  b {
    font-weight: 500;
  }
  font-size: 19px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
  text-align: justify;
}
</style>
