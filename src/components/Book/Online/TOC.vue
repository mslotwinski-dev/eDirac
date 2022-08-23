<template>
  <div :class="{ hide }" class="cont">
    <nav v-if="toc && Object.keys(toc).length > 0">
      <li
        class="s intro"
        :class="{ active: currentSubject == 'Idea.vue' }"
        @click="setSubject('Idea.vue')"
      >
        Idea
      </li>
      <li
        class="s intro"
        :class="{ active: currentSubject == 'Author.vue' }"
        @click="setSubject('Author.vue')"
      >
        O autorze
      </li>
      <li
        class="s intro"
        :class="{ active: currentSubject == 'Intro.vue' }"
        @click="setSubject('Intro.vue')"
      >
        Wprowadzenie
      </li>
      <ol class="root">
        <div v-for="part in [...new Set(toc.map((e) => e.part))]" :key="part">
          <li v-html="part" class="p" />
          <ol class="first-child">
            <div v-for="(chapter, i) in toc" :key="chapter">
              <div v-if="chapter.part == part">
                <li v-html="`${i + 1}. ${chapter.chapter}`" class="c" />
                <ol>
                  <div v-for="(subject, k) in chapter.subjects" :key="subject">
                    <li
                      @click="setSubject(subject[1])"
                      v-html="`${i + 1}.${k + 1}. ${subject[0]}`"
                      class="s"
                      :class="{ active: currentSubject == subject[1] }"
                    />
                  </div>
                </ol>
              </div>
            </div>
          </ol>
        </div>
      </ol>
    </nav>
    <div class="show" @click="hide = !hide">
      <ic :icon="`angles-${hide ? 'right' : 'left'}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from '@/data/types/book'
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['setSubject'],
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
  data() {
    return {
      hide: false,
      currentSubject: '',
      toc: [] as { subjects: string[][] }[],
    }
  },
  methods: {
    setSubject(subject: string) {
      this.currentSubject = subject
      this.$emit('setSubject', subject)
    },
  },
  mounted() {
    this.toc = Object.entries(this.book.Content)
      .map((e) =>
        Object.entries(e[1]).map(
          (f) =>
            new Object({
              part: e[0],
              chapter: f[0],
              subjects: Object.entries(f[1]),
            })
        )
      )
      .flat(2) as { subjects: string[][] }[]

    this.setSubject(this.toc[0].subjects[0][1])
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.hide {
  nav {
    ol {
      display: none;
    }
    padding: 0;
    width: 0px !important;
  }

  @media (max-width: 1000px) {
    .show {
      background: theme(main);
      color: theme(light);
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
}

.cont {
  display: flex;
  margin: 30px 0 0 30px;

  @media (max-width: 1000px) {
    position: fixed;
    top: $height;
    left: 0;
    width: 100vw;
    height: calc(100vh - $height);
    margin: 0;
    z-index: 1;
  }
}
.show {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: theme(main);
  color: theme(light);
  border-radius: 25%;
  font-size: 22px;
  margin: 0 10px;

  @media (max-width: 1000px) {
    position: absolute;
    right: 10px;
    top: 10px;
    color: theme(main);
    background: unset;
    font-size: 30px;
    z-index: 2;
  }
}
nav {
  background: #e3e3e3;
  width: 450px;
  padding: 10px 20px 20px 20px;
  flex-shrink: 0;
  height: 80vh;
  overflow-y: scroll;
  border-radius: 20px;
  transition: 0.2s;

  @media (max-width: 1000px) {
    width: 100%;
    height: calc(100vh - $height);
    border-radius: 0;
    background: #e3e3e3dd;
    backdrop-filter: blur(4px);
    padding: 15px;
  }
}

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
    font-size: 20px;
    margin: 10px 0;
    &:before {
      font-size: 0;
      opacity: 0;
    }
  }
  &.c {
    font-size: 16px;
    margin: 2px 0;
  }
  &.s {
    font-size: 14.5px;
    margin: 2px 0;
    transition: all 0.2s;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 2px;
      background-color: theme(main_dark);
      border-radius: 100%;
      transition: 0.3s all;
    }
    &:hover {
      cursor: pointer;
      &:after {
        width: 100%;
      }
    }

    &.active {
      color: theme(main_dark);
      font-weight: 500;
    }
  }
}

.intro {
  margin: 2px 10px !important;
  font-size: 16px !important;
}
</style>
