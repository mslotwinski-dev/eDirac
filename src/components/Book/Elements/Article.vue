<template>
  <div class="global-book-class"><slot /></div>
</template>

<style lang="scss">
@import '@/styles/index.scss';

.global-book-class {
  font-size: 16.5px;

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    margin: 5px 0;
    padding: 0;
    @media (max-width: 1000px) {
      font-size: 17px;
    }
  }

  b {
    font-weight: 500;
  }
}
</style>
