<template>
  <div class="down"></div>
  <div class="container">
    <div class="content">
      <div class="code" v-html="403" />
      <header>{{ $t('errors.403.header') }}</header>
      <div class="takeduck">{{ $t('errors.403.duck') }}</div>
      <img src="@/assets/images/errors/duck.png" />
      <div class="yeah">{{ $t('errors.403.yeah') }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {},
  created() {
    document.title = '403 | Universe'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.code {
  background: theme(rose);
  color: theme(light);
  font-weight: 500;
  border-radius: 10px;
  font-size: 30px;
  width: 400px;
  max-width: 95vw;
  margin: auto;
}

.down {
  width: 100vw;
  height: $height;
  background: theme(dark);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - $height - 150px);
}

.content {
  text-align: center;
}

.takeduck {
  font-size: 32px;
  @media (max-width: 700px) {
    font-size: 18px;
  }
}

.yeah {
  font-style: italic;
  font-size: 18px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
}

img {
  max-width: 50vw;
  width: 300px;
}

header {
  font-weight: 500;
  font-size: 45px;
  max-width: 80vw;
  margin: 10px;
  @media (max-width: 700px) {
    padding-top: 20px;
    font-size: 24px;
  }
}
</style>
