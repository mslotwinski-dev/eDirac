<template>
  <li class="s intro">Idea</li>
  <li class="s intro">O autorze</li>
  <li class="s intro">Wprowadzenie</li>
  <ol class="root">
    <div v-for="part in [...new Set(toc.map((e) => e.part))]" :key="part">
      <li v-html="part" class="p" />
      <ol class="first-child">
        <div v-for="(chapter, i) in toc" :key="chapter">
          <div v-if="chapter.part == part">
            <li v-html="`${i + 1}. ${chapter.chapter}`" class="c" />
            <ol>
              <div v-for="(subject, k) in chapter.subjects" :key="subject">
                <li v-html="`${i + 1}.${k + 1}. ${subject[0]}`" class="s" />
              </div>
            </ol>
          </div>
        </div>
      </ol>
    </div>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    toc: Object as () => { subjects: string[][] }[],
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.root {
  padding-inline-start: 10px;
  counter-reset: item;
  margin: 0;
  ol {
    padding-inline-start: 15px;

    @media (max-width: 1000px) {
      padding-inline-start: 12px;
    }
  }
  .first-child {
    padding-inline-start: 0;
  }
}

li {
  display: block;

  &.p {
    font-weight: 500;
    text-transform: uppercase;
    color: theme(main_dark);
    font-size: 27px;
    margin: 10px 0;
  }
  &.c {
    font-size: 19px;
    margin: 2px 0;
  }
  &.s {
    font-size: 16px;
    margin: 2px 0;
    transition: all 0.2s;
  }
}

.intro {
  margin: 2px 10px !important;
  font-size: 20px !important;
}
</style>
