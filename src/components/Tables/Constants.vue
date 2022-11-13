<template>
  <div v-if="Object.keys(group).length > 0">
    <div class="container">
      <header>
        <div
          class="text"
          v-html="$t(`tables.categories.${name.toLowerCase()}`)"
        />
        <div
          class="img"
          :style="{
            backgroundImage:
              'url(' +
              require(`@/assets/images/tables/${name.toLowerCase()}.jpg`) +
              ')',
          }"
        />
      </header>
      <div class="constants" v-for="(section, index) in group" :key="index">
        <div v-if="index" class="section" v-html="index" />
        <Constant
          v-for="(constant, index) in section"
          :key="index"
          :constant="constant"
          :name="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Constant from './Constant.vue'

export default defineComponent({
  props: {
    group: Object,
    name: String,
  },
  components: {
    Constant,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.container {
  width: 1400px;
  max-width: 90vw;
  margin: 10px auto;
}

header {
  font-size: 30px;
  background: theme(light);
  color: theme(dark);
  border-radius: 30px;
  margin: 10px 0;
  @media (max-width: 1000px) {
    font-size: 22px;
    border-radius: 10px;
    color: theme(black);
  }
  overflow: hidden;
  font-weight: 500;

  .text {
    padding: 30px 10px;
    z-index: 1;

    @media (min-width: 1000px) {
      padding: 80px 10px;
    }
  }

  .img {
    position: absolute;
    width: 500px;
    height: 100%;
    right: 0;
    top: 0;
    background-size: cover;
    background-position: center;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 150px;
      background: linear-gradient(90deg, #e3e3e3, #e3e3e39e, transparent);
      @media (max-width: 1000px) {
        display: none;
      }
    }
    @media (max-width: 1000px) {
      width: 100%;
      opacity: 0.15;
    }
  }
}

.constants {
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>
