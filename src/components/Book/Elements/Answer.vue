<template>
  <div>
    <div>
      <div class="button-show answer"><ic icon="eye" />Odpowiedź</div>
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
