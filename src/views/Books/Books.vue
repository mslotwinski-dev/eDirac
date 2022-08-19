<template>
  <div v-if="category && Object.keys(category).length > 1">
    <SmallHero
      :img="`images/books/bg/${id}.jpg`"
      :subtitle="$t(`sciences.data.${id}.full_title`)"
      :blur="true"
    />
    <Books :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Category } from '@/data/types/book'
import * as CategoriesModule from '@/data/books/categories'
import { toCapitalCase } from '@/scripts/helpers/strings'

import SmallHero from '@/components/Shared/SmallHero.vue'
import Books from '@/components/Books/Pick/Book/Books.vue'

export default defineComponent({
  components: {
    SmallHero,
    Books,
  },
  data() {
    return {
      id: this.$route.params.id as string,
      category: {} as Category,
    }
  },
  methods: {
    toCapitalCase,
  },
  mounted() {
    const categories = Object.values({ ...CategoriesModule }).filter(
      (cat: Category) => cat.Title == this.id
    )

    categories && Object.keys(categories).length != 0
      ? (this.category = categories[0])
      : this.$router.push('/404')
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
