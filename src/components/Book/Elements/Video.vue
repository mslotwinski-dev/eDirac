<template>
  <div v-if="src" class="cont">
    <div class="img-container">
      <img src="@/assets/images/video.png" />
      <iframe width="1280" heigt="720" :src="src" allowfullscreen />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.cont {
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .sub {
    text-align: center;
    padding-bottom: 10px;
    font-style: italic;
    width: 100%;

    font-size: 16.5px;

    @media (max-width: 1000px) {
      font-size: 13.5px;
    }
  }
}

.img-container {
  max-height: 400px;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;

    &.border {
      border-radius: 10px;
    }
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
