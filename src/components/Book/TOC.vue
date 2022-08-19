<template>
  <div class="cont">
    <nav :class="{ hide }">
      <ol class="root">
        <div v-for="(part, i) in book.Content" :key="part">
          <li v-html="i" class="p" />
          <ol>
            <div v-for="(chapter, j) in part" :key="chapter">
              <li v-html="j" class="c" />
              <ol>
                <div v-for="(subject, k) in chapter" :key="subject">
                  <li
                    @click="setSubject(subject)"
                    v-html="k"
                    class="s"
                    :class="{ active: currentSubject == subject }"
                  />
                </div>
              </ol>
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
    }
  },
  methods: {
    setSubject(subject: string) {
      this.currentSubject = subject
      this.$emit('setSubject', subject)
    },
  },
  mounted() {
    // const e = this.book.Content
    // const FirstPart = e?.[Object.keys(e.default)[0]]
    // const FirstChapter = FirstPart[Object.keys(FirstPart)[0]]
    // const FirstSubject = FirstChapter[Object.keys(FirstChapter)[0]]
    // this.currentSubject = FirstSubject.Commponent
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.cont {
  display: flex;
  margin: 30px 0 0 30px;
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
}
nav {
  background: theme(light);
  width: 450px;
  padding: 10px 20px 20px 20px;
  flex-shrink: 0;
  height: 80vh;
  overflow-y: scroll;
  border-radius: 20px;
  transition: 0.2s;
  &.hide {
    ol {
      display: none;
    }
    padding: 0;
    width: 0px !important;
  }
}

.root {
  padding-inline-start: 0;
  counter-reset: item;
  margin: 0;
  ol {
    padding-inline-start: 15px;
    counter-reset: item;
  }
}

li {
  display: block;
  &:before {
    counter-increment: item;
    content: counters(item, '.') ' ';
  }

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
</style>
