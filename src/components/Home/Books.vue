<template>
  <article class="a">
    <div class="text">
      <header>{{ $t('home.books.header') }}</header>
      <section>{{ $t('home.books.descA') }}</section>
      <div>
        <router-link to="/books">{{ $t('home.books.button') }}</router-link>
      </div>
    </div>
  </article>
  <article>
    <div class="text">
      <section>{{ $t('home.books.descB') }}</section>
    </div>

    <img
      class="a"
      :class="{ active: i % 5 == 0 }"
      src="@/assets/icons/logo/logo.svg"
    />
    <img
      class="b"
      :class="{ active: i % 5 == 1 }"
      src="@/assets/icons/logo/logo.svg"
    />
    <img
      class="c"
      :class="{ active: i % 5 == 2 }"
      src="@/assets/icons/logo/logo.svg"
    />
    <img
      class="d"
      :class="{ active: i % 5 == 3 }"
      src="@/assets/icons/logo/logo.svg"
    />
    <img
      class="e"
      :class="{ active: i % 5 == 4 }"
      src="@/assets/icons/logo/logo.svg"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      i: 0,
    }
  },
  mounted() {
    window.setInterval(() => {
      this.i++
    }, 3000)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh 20px;
  padding-bottom: 2vh;
  font-size: 19px;
  &.a {
    background: #b4c1c7a1;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
}

.text header {
  font-weight: 400;
  font-size: 130%;
  padding-bottom: 10px;
}

.text > div {
  text-align: right;
}

.text {
  max-width: 800px;
  margin: 1vh calc(1vw + 10px);
  margin-top: 0;
}

b {
  font-weight: 800;
  text-transform: uppercase;
}

a {
  background: theme(main);
  display: inline-block;
  margin: 10px 0;
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 500;
  color: #e3e3e3;
}
section {
  margin-bottom: 10px;
}
img {
  position: absolute;
  width: 300px;
  left: calc(18% - 250px);
  bottom: 20%;

  opacity: 0;
  transition: all 1s;
  &.active {
    opacity: 1;
  }

  @media (max-width: 1400px) {
    display: none;
  }

  &.a {
    filter: invert(38%) sepia(26%) saturate(4793%) hue-rotate(166deg)
      brightness(83%) contrast(94%);
  }
  &.b {
    filter: invert(46%) sepia(6%) saturate(1407%) hue-rotate(270deg)
      brightness(90%) contrast(92%);
  }

  &.c {
    filter: invert(17%) sepia(41%) saturate(4184%) hue-rotate(320deg)
      brightness(94%) contrast(126%);
  }

  &.d {
    filter: invert(89%) sepia(13%) saturate(6998%) hue-rotate(346deg)
      brightness(99%) contrast(81%);
  }

  &.e {
    filter: invert(33%) sepia(100%) saturate(1323%) hue-rotate(92deg)
      brightness(103%) contrast(105%);
  }
}
</style>
