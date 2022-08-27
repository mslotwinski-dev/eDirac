<template>
  <li class="s intro">Idea</li>
  <li class="s intro">O autorze</li>
  <li class="s intro">Wprowadzenie</li>
  <ol class="root">
    <div v-for="part in [...new Set(toc.map((e) => e.part))]" :key="part">
      <li
        v-html="part"
        class="p"
        :style="{
          color: color,
        }"
      />
      <ol class="first-child">
        <div v-for="(chapter, i) in toc" :key="chapter">
          <div v-if="chapter.part == part">
            <li v-html="`${i + 1}. ${chapter.chapter}`" class="c" />
            <ol>
              <div v-for="(subject, k) in chapter.subjects" :key="subject">
                <li
                  @click="push(subject[1])"
                  v-html="`${i + 1}.${k + 1}. ${subject[0]}`"
                  class="s"
                />
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
    color: String,
    ID: String,
  },
  methods: {
    push(subject: string) {
      this.$store.commit('setBookChapter', {
        book: this.$route.params.id,
        subject: subject,
      })

      this.$router.push({
        name: 'BookView',
        params: { id: this.ID },
      })
    },
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
    cursor: pointer;
    &:after {
      content: '❯';
      display: flex;
      align-items: center;
      position: absolute;
      color: theme(dark);
      top: -1px;
      height: 100%;
      left: -20px;
      font-weight: 800;
      transition: 0.1s all;

      opacity: 0;
    }
    &:hover:after {
      opacity: 1;
    }
  }
}

.intro {
  margin: 2px 10px !important;
  font-size: 20px !important;
}
</style>
