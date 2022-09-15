<template>
  <div class="container">
    <Toggle @toggle="this.show = !this.show" />
    <Content :show="show" :category="category" :sortedBooks="sortedBooks" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Toggle from './Toggle.vue'
import Content from './Content.vue'
import { Book, Category } from '@/data/types/book'

export default defineComponent({
  props: {
    category: { type: Object as () => Category, required: true },
    sortedBooks: {} as {
      [index: string]: Book[]
    },
  },
  data() {
    return {
      show: false,
    }
  },
  components: {
    Toggle,
    Content,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  width: 1000px;
  max-width: 90vw;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  background: theme(main);
  color: theme(light);
}
</style>
