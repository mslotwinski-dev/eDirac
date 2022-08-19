<template>
  <span :class="{ center: center == 'true' }">
    <span
      v-html="
        katex.renderToString(eq, {
          throwOnError: false,
        })
      "
      class="equation"
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
    let eq = ref('')

    onMounted(() => {
      if (slot.value) eq.value = slot.value.innerHTML
    })

    // onMounted(() => {
    //   const ignored = ['∇']
    //   if (div.value && div.value.innerHTML)
    //     for (const char of ignored) {
    //       div.value.innerHTML = div.value.innerHTML.replace(
    //         `<span class="mord">${char}</span>`,
    //         `<span class="mord ignore-rubik">${char}</span>`
    //       )
    //     }
    // })
    return {
      katex,
      slot,
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
