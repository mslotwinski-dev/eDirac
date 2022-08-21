<template>
  <header
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${book}.jpg`) + ')',
    }"
  >
    <div class="container">
      <div class="nr" v-html="`${$t('book.chapter')} ${nr}`" />
      <slot />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    book: { type: String, required: true },
    nr: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  padding: 20px;
  margin: 0 0 20px 0;
  height: 280px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
}

.container {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  color: theme(main_dark);
  padding: 20px;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  backdrop-filter: grayscale(1) contrast(0.15) brightness(1.9);

  @media (max-width: 1000px) {
    font-size: 28px;
  }
}

.nr {
  font-size: 40px;
  padding: 10px;
  margin-top: 10px;
  width: calc(100px + 40%);
  text-align: center;
  border-radius: 10px;
  background: theme(main_dark);
  color: theme(light);
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    font-size: 28px;
  }
}
</style>
