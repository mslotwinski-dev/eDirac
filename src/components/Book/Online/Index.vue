<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book, Category } from '@/data/types/book'
import CategoriesModule from '@/data/books/'
import TableOfContents from '@/components/Book/Online/TOC.vue'
import Container from '@/components/Book/Online/Container.vue'
import { romanize } from '@/scripts/canvas/roman'

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
      this.$store.commit('setBookChapter', {
        book: this.$route.params.id,
        subject: subject,
      })
      this.currentSubject = subject
      this.key++
    },
    romanize,
  },
  mounted() {
    const books = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)

    const book = books.filter((book: Book) => book.ID == this.id)

    book && Object.keys(book).length != 0
      ? (this.book = book[0])
      : this.$router.push('/404')

    document.title = `${book[0].Title} ${romanize(book[0].Part)} | eDirac`
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
