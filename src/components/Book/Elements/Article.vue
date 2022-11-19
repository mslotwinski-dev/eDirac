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

  .bob {
    margin: 0 20px;
    width: 200px;
    max-width: 25vw;
    @media (max-width: 1000px) {
      margin-left: 0;
      margin-right: 10px;
    }
  }

  .example {
    .global-math-container {
      max-width: 75vw;
    }
  }

  .grid {
    div {
      padding: 10px;
      text-align: center;
    }
    &.display-min-800px {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
}
</style>
