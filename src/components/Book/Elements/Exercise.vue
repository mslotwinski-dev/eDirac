<template>
  <li class="exercise">
    <div class="placeholder" />
    <slot />
  </li>
</template>

<style lang="scss">
@import '@/styles/index.scss';

.exercise {
  padding: 5px;
  margin-top: 10px;
  text-align: justify;

  .hint {
    .button-show {
      background: #00647d40;
    }
    .abs {
      z-index: 1;
    }
  }

  .answer {
    .button-show {
      background: #a5003440;
    }
    .abs {
      z-index: 2;
    }
  }

  .solution {
    .button-show {
      background: #008d0040;
    }
    .abs {
      z-index: 3;
    }
  }

  .b {
    margin-top: 10px;
    @media (min-width: 1000px) {
      display: flex;
    }
  }
  .button-show {
    svg {
      padding-right: 10px;
    }
    display: inline-block;

    margin: 5px;
    padding: 7px 10px;
    border-radius: 5px;
    cursor: pointer;

    width: 180px;

    font-size: 18px;

    @media (max-width: 1000px) {
      padding: 5px 7px;
      margin: 3px 0;
      font-size: 15px;
    }

    @media (min-width: 1000px) {
      margin-bottom: 10px;
    }
  }

  .spoiler {
    position: static;
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 5px;
    max-height: 2000px;
    transition: 0.25s all;

    .placeholder {
      opacity: 0;
      padding-top: 10px;
      width: 180px;
    }
    .abs {
      position: absolute;
      padding: 10px;
      margin-left: 5px;
      left: 0;
      border-radius: 5px;
      width: 100%;
    }
  }

  .hide {
    .spoiler {
      max-height: 0px;
      margin-bottom: 0;
      // font-size: 0px;
      opacity: 0;
      width: 180px;
    }
  }

  .static {
    position: static;
  }

  .global-math-container {
    margin: 5px 0;
    max-width: 75vw;
  }
}
</style>
