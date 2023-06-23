<template>
  <header
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${title}.jpg`) + ')',
    }"
  >
    <div>
      <img :src="require(`@/assets/icons/sciences/${title}.svg`)" />
      {{ $t(`sciences.${title}`) }}
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: { title: String },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  background-size: cover;
  background-position: center;
  margin: 10px;
  border-radius: 10px;
  height: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    background-color: #28353ab0;
    color: #e3e3e3;
    width: 100%;
    flex-grow: 1;

    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    backdrop-filter: blur(5px);
  }
}

img {
  display: block;
  height: 100px;
  margin-left: 100px;
  margin-right: 30px;
  filter: invert(0.5) brightness(1000) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);
}
</style>
