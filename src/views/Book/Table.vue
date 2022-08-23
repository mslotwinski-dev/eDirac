<template>
  <div>
    <div class="moved" />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@/components/Book/Table/Index.vue'

export default defineComponent({
  components: {
    Table,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
