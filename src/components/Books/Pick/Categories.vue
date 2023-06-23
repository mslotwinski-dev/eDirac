<template>
  <div class="container">
    <!-- <div class="pickcategory" v-html="$t('sciences.info.pick')" /> -->
    <Contents :categories="categories" />
    <div class="sciences">
      <Category
        :key="category"
        v-for="category in categories"
        :category="category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as CategoriesModule from '@/data/books/categories'
import { Category as CategoryType } from '@/data/types/book'
import Category from './Category.vue'
import Contents from '@/components/Books/Pick/Contents.vue'

export default defineComponent({
  components: {
    Category,
    Contents,
  },
  data() {
    return {
      categories: [] as CategoryType[],
    }
  },
  mounted() {
    this.filterCategories(null)
  },
  methods: {
    filterCategories(category: number | null) {
      category == null
        ? (this.categories = Object.values({ ...CategoriesModule }))
        : (this.categories = Object.values({ ...CategoriesModule }).filter(
            (cat: CategoryType) => cat.Group === category
          ))
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.pickcategory {
  padding: 10px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 24px;
  }
  margin-top: 20px;
  margin-bottom: 10px;
}

.sciences {
  width: 1400px;
  max-width: 90vw;
  margin: 10px auto;
}
</style>
