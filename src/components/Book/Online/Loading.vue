<template>
  <div class="container">
    <div class="d">
      <div id="loader"></div>
      <div>{{ $t('pages.loading.wait') }}...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: theme(dark);
  font-size: 20px;
  height: 100%;
  div {
    text-align: center;
  }
}

.d {
  padding: 10vh 0;
}

$width: 6px;

#loader {
  display: block;
  position: relative;
  width: 20 * $width + 70px;
  height: 20 * $width + 70px;
  left: calc(50% - 10 * $width - 35px);
  margin-bottom: 10 * $width - 35px;
  border: $width solid transparent;
  border-top-color: #009ac0;
  border-bottom-color: #009ac01e;
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before {
    content: '';
    position: absolute;
    top: $width;
    left: $width;
    right: $width;
    bottom: $width;
    border: $width solid transparent;
    border-top-color: #d30000;
    border-bottom-color: #d300001e;
    border-radius: 50%;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 3 * $width;
    left: 3 * $width;
    right: 3 * $width;
    bottom: 3 * $width;
    border: 3px solid transparent;
    border: $width solid transparent;
    border-top-color: #e5b227;
    border-bottom-color: #e5b2271e;
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
}
</style>
