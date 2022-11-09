<template>
  <div v-if="Object.keys(sortedBooks).length != 0">
    <section v-for="(bookTag, index) in sortedBooks" :key="bookTag">
      <div class="categoryLabel">
        <img :src="require(`@/assets/icons/sciences/${index}.svg`)" />
        <div
          class="categoryName"
          v-html="$t(`sciences.data.${category.Title}.category.${index}`)"
        />
      </div>
      <div class="parts">
        <BookItem v-for="book in bookTag" :key="book" :book="book" />
      </div>
    </section>
  </div>
  <div class="sorry" v-else>
    We dont have books in your language. Change the language in menu to Polish.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Book, Category } from '@/data/types/book'

import BookItem from './Book.vue'

export default defineComponent({
  props: {
    category: { type: Object as () => Category, required: true },
    sortedBooks: {} as {
      [index: string]: Book[]
    },
  },
  components: {
    BookItem,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section,
.parts {
  width: 1400px;
  max-width: 90vw;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

section {
  flex-direction: column;
}

.categoryLabel {
  width: 800px;
  max-width: 90vw;
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 5px solid theme(dark);

  @media (max-width: 1000px) {
    border-width: 3px;
  }

  .categoryName {
    padding: 10px;
    font-size: 25px;
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 22px;
      padding: 0 10px;
    }
  }
}

img {
  width: 50px;
  height: 50px;
  filter: invert(0.5) brightness(0.25) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
}
</style>
