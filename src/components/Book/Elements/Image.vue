<template>
  <div class="cont">
    <img :src="require(`@/books/${$route.params.id}/img/${src}`)" />
    <div class="sub"><slot /></div>
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
  padding: 10px;
  img {
    width: 100%;
  }
  .sub {
    font-size: 16px;
    text-align: center;
    padding-bottom: 10px;
    font-style: italic;
  }
}
</style>
