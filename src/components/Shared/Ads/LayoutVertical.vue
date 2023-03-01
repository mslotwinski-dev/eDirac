<template>
  <div class="global-class-ad">
    <div class="text">REKLAMA</div>
    <slot />
  </div>
</template>

<style lang="scss">
@import '@/styles/index.scss';
.global-class-ad {
  width: 100%;

  margin: 10px auto;
  padding: 0 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 11px;
  }
  .text {
    font-size: 13px;
    margin-bottom: 5px;
    @media (max-width: 1000px) {
      font-size: 11px;
    }
  }
  ins {
    display: block;

    background: theme(light);
    border-radius: 10px;
    background-image: url('../../../assets/icons/logo/logo.png');
    background-size: 80px;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
