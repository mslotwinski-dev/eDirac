<template>
  <div class="placeholder">
    <Quote
      v-for="(slide, index) in nr"
      :key="index"
      :index="index"
      :activeSlide="activeSlide"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Quote from './Quote.vue'

export default defineComponent({
  components: {
    Quote,
  },
  data() {
    return {
      nr: 17,
      activeSlide: 0,
    }
  },
  methods: {
    changeSlide() {
      if (this.activeSlide < this.nr - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },
  },
  mounted() {
    this.activeSlide = Math.floor(Math.random() * this.nr)
    window.setInterval(() => {
      this.changeSlide()
    }, 15000)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.placeholder {
  width: 80vw;
  height: 90px;
  @media (max-width: 700px) {
    height: 75px;
  }
}
</style>
