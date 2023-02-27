<template>
  <li class="exercise">
    <div class="placeholder" />
    <slot />
  </li>
</template>

<style lang="scss">
@import '@/styles/index.scss';

.exercise {
  padding: 5px 10px;
  margin-top: 10px;
  .button-show {
    svg {
      padding-right: 10px;
    }
    display: inline-block;

    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 5px;
    cursor: pointer;

    font-size: 18px;

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    &.hint {
      margin-top: 10px;
      background: #00647d40;
    }

    &.answer {
      background: #a5003440;
    }

    &.solution {
      background: #008d0040;
    }
  }

  .spoiler {
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 5px;
    max-height: 2000px;
    transition: 0.2s all;

    > div {
      transition: 0.2s all;
      padding: 5px 10px;
    }

    &.hide {
      max-height: 0px;
      margin-bottom: 0;
      // font-size: 0px;
      > div {
        padding: 0 10px;
        transform: ScaleY(0%);
      }
    }
  }
}
</style>
