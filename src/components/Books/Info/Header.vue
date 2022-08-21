<template>
  <header
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${book.BG}.jpg`) + ')',
    }"
  >
    <div class="blur" />
    <div class="dark" />
    <!-- <Cover class="cover" :book="book" width="618.75" height="900" /> -->
    <div class="center">
      <div class="t" v-html="book.Title" />
      <div class="v" v-html="`${$t('sciences.vol')} ${romanize(book.Part)}`" />
      <div
        class="s"
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
import { romanize } from '@/scripts/canvas/canvas'
// import Cover from './Cover.vue'
export default defineComponent({
  props: {
    book: Object as () => Book,
  },
  methods: {
    romanize,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  height: 200px;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px) !important;
  display: flex;
  justify-content: center;
}

.blur,
.dark {
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: brightness(0.5);
}

.blur {
  backdrop-filter: blur(5px) !important;
}
.center {
  width: 1000px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: theme(light);
  .t {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 52px;
    @media (max-width: 1000px) {
      font-size: 45px;
      line-height: 40px;
    }
  }
  .v {
    font-size: 30px;
    @media (max-width: 1000px) {
      font-size: 24px;
    }
  }
  .s {
    margin-top: 5px;
    @media (max-width: 1000px) {
      font-size: 13px;
    }
  }
}
</style>
