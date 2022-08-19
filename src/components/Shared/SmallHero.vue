<template>
  <header
    class="hero"
    :style="{ backgroundImage: 'url(' + require('@/assets/' + img) + ')' }"
  >
    <div :class="{ blured: blur }" />
    <div class="container">
      <div class="subtitle">{{ subtitle }}</div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    img: String,
    subtitle: String,
    blur: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.blured {
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(5px) !important;
}

.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(200px + $height);
  @media (max-width: 700px) {
    height: 35vh;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(0.5);
  font-size: 55px;
  color: #e3e3e3;
  @media (max-width: 700px) {
    font-size: 45px;
  }
}

img {
  width: 250px;
  max-width: 40vw;
}
</style>
