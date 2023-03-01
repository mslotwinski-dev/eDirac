<template>
  <Header :book="book" />
  <Ad />
  <div class="content">
    <Nav :book="book" />
    <Content :book="book" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'

import Header from './Header.vue'
import Nav from './Nav.vue'
import Content from './Content.vue'

import Ad from '@/components/Shared/Ads/VerticalSmall.vue'

export default defineComponent({
  props: {
    book: Object as () => Book,
  },
  components: {
    Header,
    Nav,
    Content,
    Ad,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.content {
  width: 1100px;
  max-width: 100vw;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: justify;
}
</style>
