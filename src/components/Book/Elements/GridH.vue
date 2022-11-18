<template>
  <div class="gridh" :style="{ background: color }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as CategoriesModule from '@/data/books/categories'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    columns: String,
  },
  data() {
    return {
      color: Object.values({ ...CategoriesModule })
        .map((e) => e.Books)
        .flat(1)
        .filter((e: Book) => e.ID == (this.$route.params.id as string))[0]
        .Color,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.gridh {
  padding: 10px;
  color: theme(light);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
