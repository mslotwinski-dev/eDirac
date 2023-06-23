<template>
  <div class="container">
    <div class="info">
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
    <div class="content">
      <div class="desc">
        <p v-html="book.About" />
      </div>
      <div class="authors" :style="{ borderColor: book.Color }">
        <div class="icon" :style="{ color: book.Color }">
          <ic icon="feather-pointed" />
        </div>
        <router-link
          to="/"
          class="author"
          v-for="author in book.Author"
          :key="author"
          ><span v-html="author"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'
import { romanize } from '@/scripts/canvas/canvas'
import Buttons from './Buttons.vue'
// import Cover from './Cover.vue'
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

.container {
  padding: 10px 5vw;
  color: theme(dark);
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .science {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .vol {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .title {
    font-size: 28px;
    margin-bottom: 3px;
    font-weight: 500;
  }
  .subtitle {
    max-width: 600px;
  }
}

.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.content {
  flex-grow: 1;
  display: flex;
  .desc {
    flex-grow: 1;
    margin-top: 10px;
    border-top: 3px solid black;
    font-size: 18px;
  }
  .authors {
    border-radius: 10px;
    border: 8px solid;
    padding: 40px 20px;
    width: 350px;
    margin: 10px;
    margin-top: 40px;
    font-weight: 500;
    color: theme(dark);
    font-size: 21px;

    .icon {
      background: theme(light);
      width: 80px;
      height: 40px;
      position: absolute;
      right: 20px;
      top: -20px;
      font-size: 60px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
}
</style>
