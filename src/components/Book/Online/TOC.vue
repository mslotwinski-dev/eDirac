<template>
  <div :class="{ hide }" class="cont">
    <nav v-if="toc && Object.keys(toc).length > 0">
      <li
        v-for="item in ['Idea', 'Index', 'Bibliography', 'Author']"
        :key="item"
        class="s intro"
        :class="{ active: currentSubject == `${item}.vue` }"
        @click="setSubject(`${item}.vue`)"
        v-html="$t(`book.${item.toLowerCase()}`)"
      />

      <ol class="root">
        <div v-for="part in [...new Set(toc.map((e) => e.part))]" :key="part">
          <Part :part="part" :color="book.Color" :bg="book.Tag.main" />

          <ol class="first-child">
            <div v-for="(chapter, i) in toc" :key="chapter">
              <div v-if="chapter.part == part">
                <li v-html="`${i + 1}. ${chapter.chapter}`" class="c" />
                <ol>
                  <div v-for="(subject, k) in chapter.subjects" :key="subject">
                    <li
                      @click="setSubject(subject[1])"
                      class="s"
                      :class="{
                        active: currentSubject == subject[1],
                        notactive: currentSubject != subject[1],
                      }"
                      :style="{
                        color: book.Color,
                      }"
                    >
                      <ic
                        v-if="subject[1].includes('/Z.vue')"
                        icon="graduation-cap"
                      />
                      {{
                        `${!subject[1].includes('/Z.vue') ? i + 1 + '.' : ''}${
                          !subject[1].includes('/Z.vue') ? k + 1 + '.' : ''
                        } ${subject[0]}`
                      }}
                      <div
                        class="after"
                        :style="{
                          backgroundColor: book.Color,
                        }"
                      />
                    </li>
                  </div>
                </ol>
              </div>
            </div>
          </ol>
        </div>
      </ol>
    </nav>

    <div
      class="show"
      @click="hide = !hide"
      @keyup.enter="hide = !hide"
      :style="{
        color: small || hide ? '#e3e3e3' : book.Color,
        backgroundColor: small || hide ? book.Color : 'transparent',
      }"
    >
      <ic :icon="`angles-${hide ? 'right' : 'left'}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book, BookData } from '@/data/types/book'
import Part from './Part.vue'
import bookDB from '@/data/books/content/db'

export default defineComponent({
  emits: ['setSubject'],
  components: {
    Part,
  },
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
  data() {
    return {
      hide: false,
      small: false,
      currentSubject: '',
      toc: [] as { subjects: string[][] }[],
      bookDB,
    }
  },
  methods: {
    setSubject(subject: string) {
      this.currentSubject = subject
      this.$emit('setSubject', subject)
    },
  },
  mounted() {
    const toc = this.bookDB.find((e) => e.ID == this.book.ID)!
      .content as BookData

    if (toc) {
      this.toc = Object.entries(toc)
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
    }

    this.setSubject(
      Object.keys(this.$store.getters.getBookChapters[this.$route.params.id])
        .length > 0
        ? this.$store.getters.getBookChapters[this.$route.params.id]
        : 'Idea.vue'
    )

    window.addEventListener('resize', () => {
      this.small = window.innerWidth > 1000
    })

    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.hide = !this.hide
      }
    })
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.hide {
  @media (min-width: 1001px) {
    nav {
      ol {
        display: none;
      }
      padding: 0;
      width: 0px !important;
    }
  }

  @media (max-width: 1000px) {
    height: 0 !important;

    nav {
      transform: translateX(-100%);
    }
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
  border-radius: 25%;
  font-size: 22px;
  margin: 0 10px;
  cursor: pointer;

  @media (max-width: 1000px) {
    position: absolute;
    right: 10px;
    top: 10px;
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
  transition: 0.25s;

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

  &.c {
    font-size: 16px;
    margin: 2px 0;
  }
  &.s {
    font-size: 14.5px;
    margin: 2px 0;
    transition: all 0.2s;
    .after {
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
      .after {
        width: 100%;
      }
    }

    &.active {
      font-weight: 500;
    }
    &.notactive {
      color: theme(black) !important;
    }
  }
}

.intro {
  margin: 2px 10px !important;
  font-size: 16px !important;
}
</style>
