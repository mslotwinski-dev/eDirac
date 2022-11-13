<template>
  <article>
    <div class="name" v-html="$t(`tables.${name.toLowerCase()}.name`)" />
    <div class="formula" v-if="constant.type == 'formula'">
      <div
        v-html="
          katex.renderToString(`${constant.content[0]}`, {
            throwOnError: false,
            trust: true,
          })
        "
      />
      <div v-if="false">
        <div v-for="(f, index) in constant.content" :key="index">
          <div
            v-if="index != 0"
            v-html="
              katex.renderToString(f, {
                throwOnError: false,
                trust: true,
              })
            "
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'

export default defineComponent({
  props: {
    name: String,
    constant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      katex,
      content: { ...this.constant.content },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  padding: 10px;
  margin: 5px;
  background: theme(light);
  border-radius: 10px;
  .name {
    font-weight: 500;
    margin-bottom: 5px;
  }
  width: 400px;
  max-width: 90vw;
  flex-grow: 1;
}
</style>
