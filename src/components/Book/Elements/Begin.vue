<template>
  <h2>
    <div class="nr" v-html="`${$t('book.subject')} ${nr}`" />
    <slot />
    <div class="level-cont">
      <span v-html="$t('book.level')" />
      <span
        class="level"
        :class="`lvl_${advanced}`"
        v-html="$t(`book.levels.${advanced}`)"
      />
    </div>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    nr: { type: String, required: true },
    advanced: { type: String, required: true },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
h2 {
  font-weight: 500;
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: theme(main_dark);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .nr {
    width: 100%;
    background: theme(main_dark);
    padding: 5px;
    border-radius: 5px;
    font-size: 23px;
    text-transform: uppercase;
    color: theme(light);
    margin-bottom: 5px;
  }

  .level-cont {
    display: flex;
    span:first-child:after {
      content: ':';
    }
  }

  span {
    content: 'ZAKRES:';
    display: block;
    font-size: 19px;
    margin: 3px 0;
    color: theme(dark);
  }

  .level {
    margin-left: 5px;
    &.lvl_0 {
      color: green;
    }

    &.lvl_1 {
      color: #81a50a;
    }

    &.lvl_2 {
      color: goldenrod;
    }

    &.lvl_3 {
      color: crimson;
    }
  }
}
</style>
