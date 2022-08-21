<template>
  <section>
    <h2>Podsumowanie</h2>
    <p v-html="book.About" />
    <h2>Autorzy</h2>
    <p>
      <router-link
        to="/"
        class="author"
        v-for="author in book.Author"
        :key="author"
        v-html="author"
      />
    </p>
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
  width: 850px;
  max-width: 95vw;
  padding: 20px 10px;

  @media (max-width: 1000px) {
    padding: 5px 10px;
  }
}
h2 {
  font-weight: 500;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
}

a {
  display: block;
  transition: 0.2s all;
  &:hover {
    color: theme(main);
  }
}

p {
  margin: 8px 0;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}
</style>
