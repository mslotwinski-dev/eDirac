<template>
  <div class="container global-math-container">
    <div class="content">
      <div class="equation" v-dragscroll>
        <span>
          <div
            v-html="
              katex.renderToString(eq, {
                throwOnError: false,
                trust: true,
              })
            "
            class="latex"
            ref="span"
          />
        </span>
      </div>
    </div>
  </div>
  <span class="slot" ref="slot"><slot /></span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import katex from 'katex'
import * as CategoriesModule from '@/data/books/categories'
import { Book } from '@/data/types/book'

export default defineComponent({
  setup() {
    const slot = ref<HTMLSpanElement | null>(null)
    const span = ref<HTMLSpanElement | null>(null)
    let eq = ref('')

    onMounted(() => {
      if (slot.value) eq.value = slot.value.innerHTML
    })

    // onMounted(() => {
    //   const ignored = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    //   if (span.value && span.value.innerHTML)
    //     for (const char of ignored) {
    //       span.value.innerHTML = span.value.innerHTML.replace(
    //         `<span class="mord mtight">${char}</span>`,
    //         `<span class="mord mtight ignore-rubik">${char}</span>`
    //       )
    //     }
    // })

    const color = Object.values({ ...CategoriesModule })
      .map((e) => e.Books)
      .flat(1)
      .filter((e: Book) => e.ID == (useRoute().params.id as string))[0].Color

    return {
      katex,
      CategoriesModule,
      slot,
      span,
      eq,
      color,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.slot {
  display: none;
}

.container {
  width: 825px;
  max-width: 95vw;
  margin-bottom: 5px;
  border-radius: 10px;
  margin: auto;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .equation {
      display: flex;
      align-items: center;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      flex-grow: 1;
      padding: 5px 0;
      span {
        margin: auto;
      }
    }
    .nr {
      padding: 0 10px;
    }
  }
}
</style>
