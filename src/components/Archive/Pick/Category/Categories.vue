<template>
  <div class="container">
    <div class="pickcategory">{{ $t('sciences.info.pick') }}</div>
    <!-- <Filter @filterCategories="filterCategories" /> -->
    <div class="sciences">
      <CategoryItem
        v-for="category in categories"
        :key="category"
        :cat="category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as CategoriesModule from '@/data/books/categories'
import { Category } from '@/data/types/book'
// import Filter from './Filter.vue'
import CategoryItem from './CategoryItem.vue'

export default defineComponent({
  components: {
    // Filter,
    CategoryItem,
  },
  data() {
    return {
      categories: [] as Category[],
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
            (cat: Category) => cat.Group === category
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
