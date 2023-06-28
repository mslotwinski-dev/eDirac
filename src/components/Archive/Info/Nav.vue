<template>
  <nav>
    <router-link
      v-for="option in options"
      :key="option"
      :to="{
        name: option.r,
        params: { id: book.ID },
      }"
      :class="{ not: option.not }"
      :style="{
        cursor: option.not && 'not-allowed',
      }"
    >
      <div><ic :icon="option.i" /></div>
      {{ $t(`book.pick.${option.r}`) }}
      <ic v-if="option.not" class="cross" icon="xmark" />
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    book: Object as () => Book,
  },
  data() {
    return {
      options: [
        { r: 'BookTable', i: 'list' },
        { r: 'BookView', i: 'globe' },
        { r: 'BookPDF', i: 'fa-cloud-arrow-down', not: true },
        { r: 'BookBuy', i: 'book', not: true },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  width: 250px;
  padding: 20px 10px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 95vw;
    padding: 10px;
  }
  a {
    font-size: 20px;
    margin: 5px 0;
    display: flex;
    transition: 0.2s all;
    &:hover {
      color: theme(main);
    }
  }
  div {
    width: 35px;
    text-align: center;
    margin-right: 5px;
  }
}

.not {
  color: theme(rose) !important;
}
.cross {
  margin-left: auto;
  margin-right: 10px;
}
</style>
