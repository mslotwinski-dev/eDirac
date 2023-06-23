<template>
  <div class="categoryLabel">
    <!-- <img :src="require(`@/assets/icons/sciences/${index}.svg`)" /> -->
    <div class="categoryName" v-html="$t(`sciences.${index}`)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    index: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.categoryLabel {
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    border-width: 3px;
  }

  .categoryName {
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 22px;
      padding: 0 10px;
    }
  }
}

img {
  width: 40px;
  height: 40px;
  filter: invert(0.5) brightness(0.25) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
}
</style>
