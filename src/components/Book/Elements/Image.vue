<template>
  <div v-if="src" class="cont">
    {{ book }}
    <div class="img-container">
      <img :src="`/books/${tag}/${$route.params.id}/img/${src}`" />
    </div>
    <div class="sub"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import * as CategoriesModule from '@/data/books/categories'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      tag: Object.values({ ...CategoriesModule })
        .map((e) => e.Books)
        .flat(1)
        .filter((e: Book) => e.ID == (useRoute().params.id as string))[0].Tag
        .main,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.cont {
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .sub {
    text-align: center;
    padding-bottom: 10px;
    font-style: italic;
    width: 100%;

    font-size: 16.5px;

    @media (max-width: 1000px) {
      font-size: 13.5px;
    }
  }
}

.img-container {
  max-height: 350px;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
