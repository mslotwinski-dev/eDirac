<template>
  <section>
    <component :is="comp" />
  </section>
</template>

<script lang="ts">
import { Book } from '@/data/types/book'
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  props: {
    book: Object as () => Book,
    subject: {
      type: String,
      required: true,
    },
    lorem: String,
  },
  computed: {
    comp() {
      return defineAsyncComponent(
        () => import(`>>/books/${this.book!.ID}/content/${this.subject}`)
      )
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  margin: 20px;
  margin-top: 30px;
  width: 825px;
}
</style>
