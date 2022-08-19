<template>
  <section>
    <h2>Podsumowanie</h2>
    <div v-html="book.About" />
    <h2>Autorzy</h2>
    <router-link
      to="/"
      class="author"
      v-for="author in book.Author"
      :key="author"
      v-html="author"
    />
    <h2>Podziękowania</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    book: Object as () => Book,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  flex-grow: 1;
}
h2 {
  margin-bottom: 10px;
  font-weight: 500;
}

a {
  display: block;
  transition: 0.2s all;
  &:hover {
    color: theme(main);
  }
}
</style>
