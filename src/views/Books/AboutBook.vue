<template>
  <div>
    <div class="moved" />
    <AboutBook v-if="book && Object.values(book).length > 0" :book="book" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutBook from '@/components/Books/Info/Index.vue'
import * as CategoriesModule from '@/data/books/categories'
import { Book, Category } from '@/data/types/book'

export default defineComponent({
  data() {
    return {
      science: this.$route.params.id as string,
      id: this.$route.params.id_2 as string,
      book: {} as Book,
    }
  },
  components: {
    AboutBook,
  },
  mounted() {
    const books = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)

    const book = books.filter(
      (book: Book) =>
        book.Tag.main == this.science &&
        book.Tag.lang == this.$store.getters.getAppLanguage &&
        book.ID == this.id
    )

    book && Object.keys(book).length != 0
      ? (this.book = book[0])
      : this.$router.push('/404')
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
