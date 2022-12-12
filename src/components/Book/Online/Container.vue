<template>
  <section>
    <Content v-if="render" :render="render" />
    <Loading v-if="!render && !error" />
    <Center class="err" v-if="error">
      <span>
        <ic icon="warning" />
      </span>
      <h3>Błąd</h3>
      <div>Sekcja nieprawidłowa lub w budowie</div>
    </Center>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { Book } from '@/data/types/book'
import Content from '../Online/Content.vue'
import Loading from './Loading.vue'

export default defineComponent({
  props: {
    book: {
      type: Object as () => Book,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    lorem: String,
  },
  data() {
    return {
      render: '',
      error: false,
    }
  },
  components: {
    Content,
    Loading,
  },
  async mounted() {
    try {
      const res = await axios.get(
        `/books/${this.book.Tag.main}/${this.$route.params.id}/content/${this.subject}`
      )

      this.render = res.data
        .replace('<template>', '')
        .replace('</template>', '')
    } catch (e) {
      this.error = true
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  margin: 12px;
  margin-top: 30px;
  width: 825px;
}

.err {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: theme(gold);
    font-size: 55px;
  }
  h3 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    text-transform: uppercase;
  }
  div {
    font-size: 18px;
    padding: 10px;
  }
}
</style>
