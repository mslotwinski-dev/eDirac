<template>
  <div class="container">
    <Data :book="book" />
    <div class="content">
      <div class="desc">
        <p v-html="book.About" />
      </div>
      <Authors :book="book" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'

import Data from './Data.vue'
import Authors from './Authors.vue'
// import Cover from './Cover.vue'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },

  components: {
    Data,
    Authors,
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
}

.content {
  flex-grow: 1;
  display: flex;
  overflow-y: scroll;

  .desc {
    flex-grow: 1;
    margin-top: 10px;
    border-top: 3px solid black;
    font-size: 18px;
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    min-height: 200px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
}
</style>
