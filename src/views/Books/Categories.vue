<template>
  <div>
    <div class="moved" />
    <!-- <Hero img="pages/formulas/hero.jpg" :subtitle="$t('formulas.index.hero')" /> -->
    <Categories />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import Hero from '@/components/Shared/Hero.vue'
import Categories from '@/components/Books/Pick/Category/Categories.vue'

export default defineComponent({
  components: {
    // Hero,
    Categories,
  },
  methods: {},
  mounted() {
    document.title = this.$t('pages.formulas') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
