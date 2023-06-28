<template>
  <Navigation :book="book">
    <Download :background="book.Color" />
    <Generate :book="book" />
  </Navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Book, Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'

import Navigation from '@/components/Book/Navigation.vue'
import Download from '@/components/Book/PDF/Download.vue'
import Generate from '@/components/Book/PDF/Generate.vue'

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id as string,
      book: {} as Book,
    }
  },

  mounted() {
    const book = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)
      .filter(
        (book: Book) =>
          // book.Tag.main == this.science &&
          // book.Tag.lang == this.$store.getters.getAppLanguage &&
          book.ID == this.id
      )

    book && Object.keys(book).length != 0
      ? (this.book = book[0])
      : this.$router.push('/404')
  },

  components: {
    Navigation,
    Download,
    Generate,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
