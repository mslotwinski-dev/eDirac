<template>
  <div class="container">
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
import CategoriesModule from '@/data/books/'
import { Category as CategoryType } from '@/data/types/book'
import Category from './Category.vue'
import Contents from './Contents.vue'

export default defineComponent({
  components: {
    Category,
    Contents,
  },
  data() {
    return {
      categories: Object.values({ ...CategoriesModule }) as CategoryType[],
    }
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
