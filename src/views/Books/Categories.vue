<template>
  <div class="flex">
    <!-- <div class="moved" /> -->
    <!-- <Ad /> -->
    <!-- <Hero img="pages/formulas/hero.jpg" :subtitle="$t('formulas.index.hero')" /> -->
    <SmallHero
      :img="`images/books/bg/physics_quantum.jpg`"
      :subtitle="$t(`navigation.navbar.subpages.books`)"
      :blur="true"
    />

    <Categories />

    <Ad />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import Hero from '@/components/Shared/Hero.vue'
import SmallHero from '@/components/Shared/SmallHero.vue'
import Categories from '@/components/Books/Categories.vue'
import Ad from '@/components/Shared/Ads/VerticalSmall.vue'

export default defineComponent({
  components: {
    SmallHero,
    Categories,
    Ad,
  },
  methods: {},
  mounted() {
    document.title = this.$t('pages.books') + ' | eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
