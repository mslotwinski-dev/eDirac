<template>
  <div class="moved" />
  <Constants
    v-for="(group, index) in constants"
    :key="index"
    :group="group"
    :name="index"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Constants from '@/components/Tables/Constants.vue'
import constants from '@/data/tables/index'

export default defineComponent({
  data() {
    return {
      constants,
    }
  },
  components: {
    Constants,
  },
  created() {
    document.title = 'Tablice | eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
