<template>
  <div>
    <div class="head">
      <div>
        <div class="science" v-html="$t(`sciences.${book.Tag.main}`)" />
        <div
          class="vol"
          :style="{ color: book.Color }"
          v-html="`${$t('sciences.vol')} ${romanize(book.Part)}`"
        />
      </div>
      <Buttons :book="book" />
    </div>
    <div
      class="title"
      v-html="book.Title"
      v-if="
        !book.Title.includes(
          $t(`sciences.${book.Tag.main}`) + ' ' + romanize(book.Part)
        )
      "
    />
    <div
      class="subtitle"
      v-html="
        `${book.Subtitles[0] ? book.Subtitles[0] : ''} ${
          book.Subtitles[1] ? book.Subtitles[1] : ''
        }`
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { romanize } from '@/scripts/canvas/canvas'
import Buttons from './Buttons.vue'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },

  methods: {
    romanize,
  },
  components: {
    Buttons,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    flex-wrap: wrap-reverse;
    margin-bottom: 2px;
  }
}

.science {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 10px;

  @media (max-width: 1000px) {
    font-size: 32px;
  }
}
.vol {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 10px;
  @media (max-width: 1000px) {
    font-size: 24px;
  }
}
.title {
  font-size: 28px;
  margin-bottom: 3px;
  font-weight: 500;
  margin-left: 10px;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
}
.subtitle {
  max-width: 600px;
  font-size: 20px;
  margin-left: 10px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}
</style>
