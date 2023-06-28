<template>
  <Navigation :book="book">
    <List :toc="toc" :color="book.Color" />
  </Navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book, BookData, Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'
import bookDB from '@/data/books/content/db'

import List from '@/components/Book/Table/List.vue'
import Navigation from '@/components/Book/Navigation.vue'

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id as string,
      book: {} as Book,
      toc: [] as { subjects: string[][] }[],
      bookDB,
    }
  },

  mounted() {
    const book = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)
      .filter((book: Book) => book.ID == this.id)

    book && Object.keys(book).length != 0
      ? (this.book = book[0])
      : this.$router.push('/404')

    const toc = this.bookDB.find((e) => e.ID == this.id)!.content as BookData

    if (toc) {
      this.toc = Object.entries(toc)
        .map((e) =>
          Object.entries(e[1]).map(
            (f) =>
              new Object({
                part: e[0],
                chapter: f[0],
                subjects: Object.entries(f[1]),
              })
          )
        )
        .flat(2) as { subjects: string[][] }[]
    }
  },

  components: {
    Navigation,
    List,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
