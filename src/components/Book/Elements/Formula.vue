<template>
  <div class="container" :style="{ backgroundColor: `#00647d40` }">
    <div class="content">
      <div class="equation" v-dragscroll>
        <span>
          <div
            v-html="
              katex.renderToString(`\\displaystyle ${eq}`, {
                throwOnError: false,
                trust: true,
              })
            "
            class="latex"
            ref="span"
          />
        </span>
      </div>
      <div class="nr" v-html="`(${nr})`" />
    </div>
  </div>
  <span class="slot" ref="slot"><slot /></span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import katex from 'katex'
import * as CategoriesModule from '@/data/books/categories'

export default defineComponent({
  props: {
    nr: String,
  },
  setup() {
    const slot = ref<HTMLSpanElement | null>(null)
    const span = ref<HTMLSpanElement | null>(null)
    let eq = ref('')

    onMounted(() => {
      if (slot.value) eq.value = slot.value.innerHTML
    })

    return {
      katex,
      CategoriesModule,
      slot,
      span,
      eq,
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
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 8px;
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
