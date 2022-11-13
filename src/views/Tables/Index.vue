<template>
  <div class="moved" />
  <div class="home">
    {{ $t('main.slogan') }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    document.title = 'Tablice | eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
