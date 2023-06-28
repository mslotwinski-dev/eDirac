<template>
  <div class="show" @click="show = !show" v-html="$t('book.pdf.generate')" />
  <div class="container" v-if="show" @click="show = !show">
    <Cover :book="book" />
    <span>
      <ic icon="times" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'
import Cover from './Cover.vue'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
  data() {
    return { show: false }
  },
  components: { Cover },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.show {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  font-size: 21px;
  cursor: pointer;
  color: theme(light);
  background: theme(dark);
  margin: 10px 0;

  @media (max-width: 1000px) {
    width: 250px;
    padding: 8px;
    font-size: 19px;
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: theme(dark, 0.8);
  backdrop-filter: blur(8px);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  canvas {
    height: 98vh;
  }

  span {
    position: absolute;
    right: 50px;
    top: 20px;
    font-size: 40px;
    color: theme(light);
    z-index: 200;
    cursor: pointer;
  }
}
</style>
