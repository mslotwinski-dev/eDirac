<template>
  <div class="moved" />
  <div class="home">
    <Header />
    <About />
    <Books />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Home/Header.vue'
import About from '@/components/Home/About.vue'
import Books from '@/components/Home/Books.vue'

export default defineComponent({
  components: {
    Header,
    About,
    Books,
  },
  created() {
    document.title = 'eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
