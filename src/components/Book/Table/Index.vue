<template>
  <Ad />
  <div class="container">
    <nav v-if="toc && Object.keys(toc).length > 0">
      <List :toc="toc" :color="book.Color" :ID="book.ID" />
      <router-link
        :to="{
          name: 'BookView',
          params: { id: book.ID },
        }"
        :style="{
          backgroundColor: book.Color,
        }"
        ><ic icon="book" />
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book, Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'
import List from './List.vue'
import { romanize } from '@/scripts/canvas/roman'

import Ad from '@/components/Shared/Ads/VerticalSmall.vue'

export default defineComponent({
  data() {
    return {
      id: this.$route.params.id as string,
      book: {} as Book,
      toc: [] as { subjects: string[][] }[],
      key: 0,
    }
  },
  components: { List, Ad },
  methods: { romanize },
  mounted() {
    const books = Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)

    const book = books.filter(
      (book: Book) =>
        // book.Tag.lang == this.$store.getters.getAppLanguage &&
        book.ID == this.id
    )

    book && Object.keys(book).length != 0
      ? (this.book = book[0])
      : this.$router.push('/404')

    this.toc = Object.entries(this.book.Content)
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

    document.title = `${book[0].Title} ${romanize(book[0].Part)} | eDirac`
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  justify-content: center;
}
nav {
  width: 1000px;
  max-width: 98vw;
  margin-top: 20px;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  background-color: theme(main_dark);
  color: theme(light);
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s all;
  &:hover {
    background-color: theme(main);
  }
}
</style>
