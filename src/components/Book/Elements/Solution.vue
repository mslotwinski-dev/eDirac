<template>
  <div>
    <div>
      <div class="button-show solution">
        <ic icon="feather-pointed" />Rozwiązanie
      </div>
    </div>
    <div :class="{ hide: true }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
li {
  // background: red;
}
</style>
