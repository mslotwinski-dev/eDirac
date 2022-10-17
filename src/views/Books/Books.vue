<template>
  <div v-if="category && Object.keys(category).length > 1">
    <SmallHero
      :img="`images/books/bg/${id}.jpg`"
      :subtitle="$t(`sciences.data.${id}.full_title`)"
      :blur="true"
    />
    <Short :key="key" :sortedBooks="sortedBooks" :category="category" />
    <Books :key="key" :sortedBooks="sortedBooks" :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Book, Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'
import { toCapitalCase } from '@/scripts/helpers/strings'

import SmallHero from '@/components/Shared/SmallHero.vue'
import Short from '@/components/Books/Pick/Book/Short/Index.vue'
import Books from '@/components/Books/Pick/Book/Books.vue'

export default defineComponent({
  components: {
    SmallHero,
    Short,
    Books,
  },
  data() {
    return {
      id: this.$route.params.id as string,
      category: {} as Category,
      sortedBooks: {} as {
        [index: string]: Book[]
      },
      key: 0,
    }
  },
  methods: {
    toCapitalCase,

    resetBooks() {
      const cats = this.category.Books
      // !.filter((c) =>
      //   c.Tag.lang.includes(this.$store.getters.getAppLanguage)
      // )

      type SortedBooksObj = {
        [index: string]: Book[]
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
    const categories = Object.values({ ...CategoriesModule }).filter(
      (cat: Category) => cat.Title == this.id
    )

    categories && Object.keys(categories).length != 0
      ? (this.category = categories[0])
      : this.$router.push('/404')

    this.resetBooks()

    document.title = `${this.$t(
      `sciences.data.${this.id}.full_title`
    )} | eDirac`
  },
  watch: {
    '$store.getters.getAppLanguage': function () {
      this.resetBooks()
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
