<template>
  <li class="exercise">
    <div class="placeholder" />
    <slot />
  </li>
</template>

<style lang="scss">
.exercise {
  padding: 10px 0;
  .button-show {
    svg {
      padding-right: 10px;
    }
    display: inline-block;

    margin: 5px 0;
    padding: 7px 10px;
    border-radius: 5px;

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
  .hide {
    display: none;
  }
}
</style>
