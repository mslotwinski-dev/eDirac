<template>
  <section>
    <Content :render="render" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { Book } from '@/data/types/book'
import Content from './Content.vue'

export default defineComponent({
  props: {
    book: Object as () => Book,
    subject: {
      type: String,
      required: true,
    },
    lorem: String,
  },
  data() {
    return {
      render: '',
    }
  },
  components: {
    Content,
  },
  mounted() {
    axios
      .get(`/books/${this.$route.params.id}/content/${this.subject}`)
      .then((res) => {
        this.render = res.data
          .replace('<template>', '')
          .replace('</template>', '')
      })
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  margin: 20px;
  margin-top: 30px;
  width: 825px;
}
</style>
