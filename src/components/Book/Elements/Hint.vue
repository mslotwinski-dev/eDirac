<template>
  <div>
    <div>
      <div class="button-show hint"><ic icon="lightbulb" />Wskazówka</div>
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
