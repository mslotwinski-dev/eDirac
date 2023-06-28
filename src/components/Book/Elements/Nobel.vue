<template>
  <span>
    <b :style="{ color }">
      <ic icon="star" />
      <slot />
    </b>
    <div :style="{ background: color }" v-html="'Noblista'" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CategoriesModule from '@/data/books/'
import { Book } from '@/data/types/book'

export default defineComponent({
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
b {
  filter: brightness(0.7);
  cursor: help;
  &:hover ~ div {
    opacity: 1;
    z-index: 1;
  }
}

div {
  color: #f3f3f3;
  padding: 5px 15px;
  border-radius: 7px;
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  font-weight: 600;
  opacity: 0;
  z-index: -1;
  transition: all 0.2s;
}

svg {
  margin-right: 4px;
}
</style>
