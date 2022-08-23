<template>
  <div ref="div" v-if="src" class="cont">
    <img ref="image" :src="`/books/${$route.params.id}/img/${src}`" />
    <div class="sub"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'

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
  img {
    max-width: 100%;
  }
  .sub {
    font-size: 16px;
    text-align: center;
    padding-bottom: 10px;
    font-style: italic;
  }
}
</style>
