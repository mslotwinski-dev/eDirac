<template>
  <header
    :style="{
      backgroundImage:
        'url(' +
        require(`@/assets/images/books/bg/${book.Tag.main}/${book.Part}.jpg`) +
        ')',
    }"
  >
    <div class="title">
      <div class="a" v-html="book.Title" />
      <div class="b" v-html="`${$t('sciences.vol')} ${romanize(book.Part)}`" />
    </div>
    <div class="subtitles">
      <div class="a" v-html="book.Subtitles[0] ? book.Subtitles[0] : ''" />
      <div class="b" v-html="book.Subtitles[1] ? book.Subtitles[1] : ''" />
      <div
        class="both"
        v-html="
          `${book.Subtitles[0] ? book.Subtitles[0] : ''} ${
            book.Subtitles[1] ? book.Subtitles[1] : ''
          }`
        "
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'
import { romanize } from '@/scripts/canvas/roman'
import * as CategoriesModule from '@/data/books/categories'

export default defineComponent({
  data() {
    return {
      book: Object.values({ ...CategoriesModule })
        .map((e) => e.Books)
        .flat(1)
        .filter((e: Book) => e.ID == (this.$route.params.id as string))[0],
    }
  },
  methods: {
    romanize,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  margin: 0 0 20px 0;
  height: 500px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: 350px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title,
.subtitles {
  padding: 20px;

  text-align: center;

  font-weight: 700;
  backdrop-filter: brightness(0.4);
  text-shadow: 0px 0px 6px #000;

  color: theme(light);
}

.title {
  text-transform: uppercase;

  padding-top: 40px;

  .a {
    font-size: 50px;
  }
  .b {
    font-size: 30px;
  }

  @media (max-width: 1000px) {
    .a {
      font-size: 35px;
    }
    .b {
      font-size: 25px;
    }
  }
}

.subtitles {
  .both {
    display: none;
    font-size: 14.5px;
    text-align: center;
  }
  font-weight: 500;
  text-align: left;
  font-size: 19px;

  @media (max-width: 1000px) {
    .a,
    .b {
      display: none;
    }
    .both {
      display: block;
    }
  }
}
</style>
