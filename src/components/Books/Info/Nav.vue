<template>
  <nav>
    <router-link to="/">
      <div><ic icon="list" /></div>
      Spis Treści
    </router-link>
    <router-link
      :to="{
        name: 'BookView',
        params: { id: book.ID },
      }"
    >
      <div><ic icon="globe" /></div>
      Online
    </router-link>
    <router-link to="/">
      <div><ic icon="fa-cloud-arrow-down" /></div>
      PDF
    </router-link>
    <router-link to="/">
      <div><ic icon="book" /></div>
      Kup Książkę
    </router-link>
  </nav>
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
nav {
  width: 250px;
  padding: 20px 10px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 95vw;
    padding: 10px;
  }
  a {
    font-size: 20px;
    margin: 5px 0;
    display: flex;
    transition: 0.2s all;
    &:hover {
      color: theme(main);
    }
  }
  div {
    width: 35px;
    text-align: center;
    margin-right: 5px;
  }
}
</style>
