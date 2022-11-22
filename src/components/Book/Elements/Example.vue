<template>
  <div class="example" :style="{ backgroundColor: color + '33' }">
    <h3 :style="{ color }" @click="show = !show">
      <span><ic class="flask" icon="flask" /> Przykład</span>
      <span>
        <span class="nr" v-html="nr" />
        <ic class="i" :class="{ rev: !show }" icon="angles-down" />
      </span>
    </h3>
    <section :class="{ hidden: !show }">
      <header v-html="title" />
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as CategoriesModule from '@/data/books/categories'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    title: String,
    nr: String,
  },
  data() {
    return {
      show: true,
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
section,
div {
  text-align: justify;

  margin-block-start: 0.75em;
  margin-block-end: 0.75em;
  @media (max-width: 1000px) {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  transition: 0.2s all;
  max-height: 3000px;
}

div {
  padding: 10px 20px;
  border-radius: 10px;
}

h3 {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.hidden {
  margin: 0;
  max-height: 1px;
  color: transparent;
  overflow: hidden;
}

.i {
  margin: 0 15px;
  transition: 0.2s all;
  &.rev {
    transform: scaleY(-1);
  }
}

.nr {
  color: theme(dark);
  margin-right: 10px;
}

.flask {
  margin-right: 10px;
}

header {
  margin: 5px 0;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 17px;
}
</style>
