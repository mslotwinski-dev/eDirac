<template>
  <div class="moved" />
  <Ad />
  <Constants
    v-for="(group, index) in constants"
    :key="index"
    :group="group"
    :name="index"
  />
  <Ad />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Constants from '@/components/Tables/Constants.vue'
import Ad from '@/components/Shared/Ads/VerticalSmall.vue'
import constants from '@/data/tables/index'

export default defineComponent({
  data() {
    return {
      constants,
    }
  },
  components: {
    Constants,
    Ad,
  },
  created() {
    document.title = 'Tablice | eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
