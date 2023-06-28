<template>
  <div class="gridh" :style="{ background: color }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CategoriesModule from '@/data/books/'
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
  color: theme(light);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
