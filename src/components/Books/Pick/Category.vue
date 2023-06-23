<template>
  <div class="category" :id="category.Title">
    <Header :title="category.Title" />
    <Def :title="category.Title" />
    <div class="parts" :key="index" v-for="(books, index) in sortedBooks">
      <Label v-if="index != category.Title" :index="index" />
      <Book v-for="book in books" :key="book" :book="book" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category, Book as BookType } from '@/data/types/book'
import Header from './Header.vue'
import Def from './Def.vue'
import Book from './Book.vue'
import Label from './Label.vue'

export default defineComponent({
  props: {
    category: {
      type: Object as () => Category,
      required: true,
    },
  },
  data() {
    return {
      sortedBooks: {} as {
        [index: string]: BookType[]
      },
      key: 0,
    }
  },
  methods: {
    resetBooks() {
      const cats = this.category.Books!.filter((c) =>
        c.Tag.lang.includes(this.$store.getters.getAppLanguage)
      )

      type SortedBooksObj = {
        [index: string]: BookType[]
      }

      const Sorted = cats.reduce(function (memo: SortedBooksObj, x) {
        if (!memo[x.Tag.main]) {
          memo[x.Tag.main] = []
        }
        memo[x.Tag.main].push(x)
        return memo
      }, {})

      this.sortedBooks = Sorted
      this.key++
    },
  },
  mounted() {
    this.resetBooks()
  },
  watch: {
    '$store.getters.getAppLanguage': function () {
      this.resetBooks()
    },
  },
  components: {
    Header,
    Def,
    Book,
    Label,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.category {
  margin-bottom: 20px;
}

.parts {
  width: 1400px;
  max-width: 90vw;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
