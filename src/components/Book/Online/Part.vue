<template>
  <div
    class="container"
    :style="{
      color: color,
    }"
  >
    <li v-html="part" class="p" />
  </div>

  <!-- backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${bg}.jpg`) + ')', -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    part: String,
    color: String,
    bg: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  // height: 30px;
  margin: 10px 0;

  background-size: cover;
  background-position: center;
  border-radius: 11px;
}

.p {
  display: flex;
  align-items: flex-end;

  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  // padding: 10px;
  &:before {
    font-size: 0;
    opacity: 0;
  }

  // position: absolute;

  // width: 100%;
  // height: 100%;
  // top: 0;
  // left: 0;

  // border-radius: 10px;
  // backdrop-filter: grayscale(1) contrast(0.15) brightness(1.9);
}
</style>
