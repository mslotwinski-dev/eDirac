<template>
  <div>
    <div class="moved" />
    <div class="content" v-if="book && Object.keys(book).length > 0">
      <TableOfContents @setSubject="setSubject" :book="book" />
      <Container
        v-if="currentSubject && currentSubject.length > 0"
        :key="key"
        :subject="currentSubject"
        :book="book"
        lorem="LoremIpsum"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book, Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'
import TableOfContents from '@/components/Book/TOC.vue'
import Container from '@/components/Book/Container.vue'

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id as string,
      book: {} as Book,
      currentSubject: {},
      key: 0,
    }
  },
  components: {
    TableOfContents,
    Container,
  },
  methods: {
    setSubject(subject: string) {
      this.currentSubject = subject
      this.key++
    },
  },
  mounted() {
    const books = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)

    const book = books.filter(
      (book: Book) =>
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
.content {
  width: 1600px;
  max-width: 99vw;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
