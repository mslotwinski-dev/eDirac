<template>
  <div id="beginnings">
    <h2>
      {{ $t('info.sections.beginnings.name') }}
    </h2>
    <section>
      <img src="@/assets/images/info/map.png" />
      <div>
        W zasadzie wszystko to zaczęło się od odklejonego od rzeczywistości
        16-latka żyjącego gdzieś na skraju Europy Środkowej, we wschodniej
        Polsce.
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
img {
  border-radius: 20px;
  width: 95vw;
  max-width: 800px;
  margin: auto;
  margin-bottom: 10px;
}
</style>
