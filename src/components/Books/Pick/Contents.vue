<template>
  <div class="container">
    <div class="pickcategory">{{ $t('sciences.info.pick') }}</div>
    <!-- <Filter @filterCategories="filterCategories" /> -->
    <div class="sciences">
      <Item
        v-for="category in categories"
        :key="category"
        :title="category.Title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from '@/data/types/book'
import Item from './Contentstem.vue'

export default defineComponent({
  props: {
    categories: Object as () => Category[],
  },
  components: {
    // Filter,
    Item,
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
  margin-bottom: 30px;
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
