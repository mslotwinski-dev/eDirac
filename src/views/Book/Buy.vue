<template>
  <Navigation :book="book"> {{ book }} </Navigation>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Book, Category } from '@/data/types/book'
import CategoriesModule from '@/data/books/'

import Navigation from '@/components/Book/Navigation.vue'

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
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
