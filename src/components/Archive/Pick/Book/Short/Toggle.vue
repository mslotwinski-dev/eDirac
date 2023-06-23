<template>
  <div
    class="c"
    @click="toggle()"
    :style="{
      paddingBottom: show ? '10px' : '0',
    }"
  >
    <ic class="i" :class="{ rev: !show }" icon="angles-down" />
    <div class="t" v-html="show ? 'Hide' : 'Show'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['toggle'],
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      this.$emit('toggle')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.c {
  display: flex;
  font-size: 21px;
  cursor: pointer;
}

.i {
  display: flex;
  align-items: center;
  margin-right: 10px;
  transition: 0.2s all;
  &.rev {
    transform: scaleY(-1);
  }
}
</style>
