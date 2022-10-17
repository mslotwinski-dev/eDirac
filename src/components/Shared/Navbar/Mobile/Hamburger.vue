<template>
  <button class="hamburger"></button>
</template>

<style lang="scss" scoped>
$color: #e3e3e3;

.hamburger {
  width: 35px;
  height: 25px;
  border: 0;
  border-top: 4px solid $color;
  background: transparent;
  position: relative;
  transition: 0.3s transform linear;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 4px solid $color;
  transform: translateY(7px);
}

.hamburger::after {
  transform: translateY(19px);
  transition: 0.3s transform linear;
}
</style>
