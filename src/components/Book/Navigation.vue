<template>
  <div v-if="Object.keys(book).length > 0">
    <Header :book="book" long="true" />
    <div class="container">
      <Ad />
      <Data :book="book" nobuttons="true" />
      <div class="content">
        <div class="box">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Book } from '@/data/types/book'
import { romanize } from '@/scripts/canvas/roman'

import Header from '@/components/Books/Info/Header.vue'
import Data from '@/components/Books/Info/Data.vue'
import Ad from '@/components/Shared/Ads/VerticalSmall.vue'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
  components: {
    Header,
    Data,
    Ad,
  },
  methods: {
    romanize,
  },
  watch: {
    'this.book.Title': function () {
      document.title = `${this.book.Title} | eDirac`
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  margin: auto;
  max-width: 1400px;
}

.content {
  margin: 10px auto;
  border-top: 3px solid theme(dark);
  padding: 10px 0;
  max-width: 90vw;
}

.box {
  max-width: 1200px;
  margin: 10px auto;
}
</style>
