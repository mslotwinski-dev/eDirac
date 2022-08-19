<template>
  <main class="app">
    <!-- <EasterEgg /> -->
    <Navbar />
    <router-view />
    <Footer />
    <!-- <Privacy /> -->
    <notifications position="bottom left" width="400px" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import '@mslotwinski/mango-ui/'

import Navbar from '@/components/Shared/Navbar/Index.vue'
import Footer from '@/components/Shared/Footer/Index.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
})
</script>

<style lang="scss">
@import './styles/index.scss';
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.moved {
  width: 100vw;
  height: $height;
  background: theme(dark);
}
</style>
