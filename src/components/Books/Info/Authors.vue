<template>
  <div class="authors" :style="{ borderColor: book.Color }">
    <div class="icon" :style="{ color: book.Color }">
      <ic icon="feather-pointed" />
    </div>
    <router-link
      to="/"
      class="author"
      v-for="author in book.Author"
      :key="author"
    >
      <span v-html="author" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.authors {
  border-radius: 10px;
  border: 8px solid;
  padding: 40px 20px;
  width: 350px;
  min-height: 200px;
  margin: 10px;
  margin-top: 40px;
  font-weight: 500;
  color: theme(dark);
  font-size: 21px;

  .icon {
    background: theme(light);
    width: 80px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: -20px;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 1000px) {
      font-size: 30px;
    }
  }
}
</style>
