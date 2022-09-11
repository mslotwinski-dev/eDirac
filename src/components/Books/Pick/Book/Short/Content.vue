<template>
  <div :class="{ hide: !show }" class="c">
    <div class="content">
      <section v-for="(bookTag, index) in sortedBooks" :key="bookTag">
        <div class="categoryLabel">
          <img :src="require(`@/assets/icons/sciences/${index}.svg`)" />
          <div
            class="categoryName"
            v-html="$t(`sciences.data.${category.Title}.category.${index}`)"
          />
        </div>
        <div class="bc">
          <div class="b" :key="book" v-for="book in bookTag">
            <div
              class="title"
              v-html="`${book.Title} ${romanize(book.Part)}`"
            />
            <div
              v-html="book.Subtitles[0] ? book.Subtitles[0] : ''"
              class="subtitle"
            />
            <div
              v-html="book.Subtitles[1] ? book.Subtitles[1] : ''"
              class="subtitle"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { romanize } from '@/scripts/canvas/canvas'
import { Book, Category } from '@/data/types/book'

export default defineComponent({
  props: {
    category: { type: Object as () => Category, required: true },
    sortedBooks: {} as {
      [index: string]: Book[]
    },
    show: Boolean,
  },
  methods: {
    romanize,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.c {
  background-color: theme(light);
  color: theme(black);
  border-radius: 5px;
  max-height: 3000px;
  transition: all 0.25s ease-in;
  overflow: hidden;

  padding-left: 10px;

  &.hide {
    opacity: 0;
    max-height: 0;
    transition: all 0.25s ease-out;
  }
}

.content {
  padding: 10px;
}

.categoryLabel {
  padding: 10px 0;
  display: flex;
  align-items: center;

  .categoryName {
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 18px;
      padding: 0 10px;
    }
  }
}

img {
  width: 40px;
  height: 40px;
  filter: invert(0.5) brightness(0.25) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
}

.b {
  padding: 3.8px;

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 16.5px;
    max-width: 600px;
    margin: 1px;
  }
}
</style>
