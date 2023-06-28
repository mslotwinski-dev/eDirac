<template>
  <nav>
    <router-link
      v-for="option in options"
      :key="option"
      :to="{
        name: option.not ? '403' : option.r,
        params: { id: book.ID },
      }"
      :class="{ not: option.not }"
      :style="{
        cursor: option.not && 'not-allowed',
        backgroundColor: book.Color,
      }"
    >
      <ic :icon="option.i" />
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
        { r: 'BookPDF', i: 'fa-cloud-arrow-down' },
        { r: 'BookBuy', i: 'book', not: true },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  display: flex;

  a {
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px;
    padding: 10px;
    font-size: 28px;
    color: theme(light);
    border-radius: 10px;

    transition: 0.2s all;
    &:hover {
      filter: brightness(1.1);
    }

    @media (max-width: 1000px) {
      width: 45px;
      height: 45px;
      font-size: 22px;
      margin-top: 0;
    }
  }
}

.not {
  filter: saturate(0.5);
  opacity: 0.5;
  &:hover {
    filter: saturate(0.5);
  }
}
</style>
