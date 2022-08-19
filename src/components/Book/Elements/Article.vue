<template>
  <div class="global-book-class"><slot /></div>
</template>

<style lang="scss">
@import '@/styles/index.scss';

.global-book-class {
  text-align: justify;
  font-size: 16.5px;

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    margin: 5px 0;
    padding: 0;
  }

  b {
    font-weight: 500;
  }
}
</style>
