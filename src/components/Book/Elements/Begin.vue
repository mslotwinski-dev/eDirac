<template>
  <h2>
    <div
      class="nr"
      v-html="`${$t('book.subject')} ${nr}`"
      :style="{
        backgroundImage: `linear-gradient(to right, ${color}, #28353a)`,
      }"
    />
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
import CategoriesModule from '@/data/books/'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    nr: { type: String, required: true },
    advanced: { type: String, required: true },
  },
  data() {
    return {
      color: Object.values({ ...CategoriesModule })
        .map((e) => e.Books)
        .flat(1)
        .filter((e: Book) => e.ID == (this.$route.params.id as string))[0]
        .Color,
    }
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
  color: theme(dark);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    font-size: 21px;
  }
  .nr {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    font-size: 23px;
    text-transform: uppercase;
    color: theme(light);
    margin-bottom: 5px;
    @media (max-width: 1000px) {
      font-size: 19px;
      padding: 4px;
    }
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

    @media (max-width: 1000px) {
      font-size: 16px;
    }
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
