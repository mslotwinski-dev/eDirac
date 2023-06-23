<template>
  <a
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${title}.jpg`) + ')',
    }"
    :href="'#' + title"
    v-smooth-scroll
  >
    <div>
      <span>
        <img :src="require(`@/assets/icons/sciences/${title}.svg`)" />
        {{ $t(`sciences.${title}`) }}
      </span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
a {
  background-size: cover;
  background-position: center;
  margin: 10px;
  border-radius: 10px;
  width: 400px;
  max-width: 90vw;
  height: 225px;
  transition: 0.25s all;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    div {
      height: 100%;
      background: #00647db0;
      span {
        img {
          height: 50px;
        }
      }
    }
  }
  div {
    background: #28353ab0;
    position: absolute;
    color: #e3e3e3;
    height: 25%;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
    font-weight: 600;
    backdrop-filter: blur(5px);
    transition: 0.3s all;
  }

  @media (max-width: 1000px) {
    height: 200px;
  }
}

img {
  display: block;
  height: 0px;
  margin: auto;
  filter: invert(0.5) brightness(1000) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);
}
</style>
