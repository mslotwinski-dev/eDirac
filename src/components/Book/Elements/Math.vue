<template>
  <span :class="{ center: center == 'true' }">
    <span
      v-html="
        katex.renderToString(eq, {
          throwOnError: false,
        })
      "
      class="equation"
      ref="span"
    >
    </span>
    <span v-if="center" v-html="`(${nr})`" />
  </span>
  <div ref="slot"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import katex from 'katex'

export default defineComponent({
  props: {
    center: String,
    nr: String,
  },
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
    return {
      katex,
      slot,
      span,
      eq,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  display: none;
}

span {
  text-align: center;
  &.center {
    display: flex;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
  }
  .equation {
    flex-grow: 1;
  }
}
</style>
