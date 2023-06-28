<template>
  <canvas
    v-if="book && Object.values(book).length > 0"
    :width="width ? width : 825"
    :height="height ? height : 1200"
    ref="can"
  />
  <!-- <img src="@/assets/images/books/cover/physics.png" /> -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated } from 'vue'
import { Book } from '@/data/types/book'
import { render as Render } from '@/scripts/canvas/canvas'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
    width: Number,
    height: Number,
  },
  // watch: {
  //   book: function () {
  //     const can = ref<HTMLElement | null>(null)
  //     console.log(can)
  //   },
  // },
  setup(props) {
    const can = ref<HTMLElement | null>(null)
    const draw = () =>
      can.value instanceof HTMLCanvasElement && Render(can.value, props.book)

    onMounted(() => draw())
    onUpdated(() => draw())

    return {
      can,
      Render,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
