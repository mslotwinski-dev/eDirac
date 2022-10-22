<template>
  <div ref="div" v-if="src" class="cont">
    {{ book }}
    <img ref="image" :src="`/books/${tag}/${$route.params.id}/img/${src}`" />
    <div class="sub"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'
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
    const image = ref(null) as Ref<HTMLImageElement | null>
    const div = ref(null) as Ref<HTMLDivElement | null>

    onMounted(() => {
      if (!image.value) return
      image.value.addEventListener('load', () => {
        // IDK WHY, IT WONT WORK IF I DONT CHECK TWICE
        if (!image.value) return
        image.value.height = 300
        const ratio = image.value.width / image.value.height
        window.addEventListener('resize', () => {
          // TYPESCRIPT WTF???
          if (!image.value || !div.value) return
          image.value.height = image.value.width / ratio

          if (image.value.height < 300) {
            image.value.width = div.value.clientWidth
          }
        })
      })
    })

    return {
      image,
      div,
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
  img {
    max-width: 100%;
  }
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
</style>
