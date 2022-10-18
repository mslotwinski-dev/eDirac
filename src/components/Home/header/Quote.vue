<template>
  <div :class="{ active: this.index == this.activeSlide }" class="subtitle">
    {{ $t(`main.quote.${index}`) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['index', 'activeSlide'],
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.subtitle {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  opacity: 0;
  transition: all 0.5s linear;

  font-size: 40px;
  color: theme(light);
  @media (max-width: 700px) {
    font-size: 30px;
  }
}

.active {
  opacity: 1;
}
</style>
