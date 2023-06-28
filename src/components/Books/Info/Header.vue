<template>
  <header
    :style="{
      backgroundImage:
        'url(' + require(`@/assets/images/books/bg/${book.Tag.main}.jpg`) + ')',
    }"
    :class="{ long }"
  >
    <div class="blur" />
    <div class="dark" />
    <!-- <Cover class="cover" :book="book" width="618.75" height="900" /> -->
    <div class="center">
      <div class="container">
        <img :src="require(`@/assets/icons/sciences/${book.Tag.main}.svg`)" />
        <div class="t" v-html="$t(`sciences.${book.Tag.main}`)" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'
import { romanize } from '@/scripts/canvas/canvas'
// import Cover from './Cover.vue'
export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
    long: String,
  },

  // data() {
  //   return {
  //     small: this.$t(`sciences.${this.book.Tag.main}`).length > 18,
  //   }
  // },
  methods: {
    romanize,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  height: 200px;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px) !important;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  max-width: 100vw;
  &.long {
    height: 300px;
    .t {
      font-size: 55px;
    }
    @media (max-width: 1000px) {
      height: 250px;
      .t {
        font-size: 35px;
      }
    }
  }
}

.blur,
.dark {
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: brightness(0.5);
}

.blur {
  backdrop-filter: blur(5px) !important;
}
.center {
  // width: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: theme(light);

  .t {
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 52px;
    margin-right: 10px;
    text-align: center;

    @media (max-width: 1000px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
}

.container {
  display: flex;
  align-items: center;
}

img {
  height: 120px;
  margin-right: 10px;
  filter: invert(0.5) brightness(1000) brightness(0.9)
    drop-shadow(0px 0px 3px #00000055);

  @media (max-width: 1000px) {
    margin-bottom: 7px;
    margin-left: 10px;
    margin-right: 10px;
    height: 60px;
  }
}
</style>
