<template>
  <header>
    <Slideshow />
    <div class="hello">
      <img src="@/assets/icons/logo/logo.svg" />
      <div>
        <div class="title"><span>e</span>DIRAC</div>
        <Quotes />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slideshow from './header/Slideshow.vue'
import Quotes from './header/Quotes.vue'

export default defineComponent({
  components: {
    Slideshow,
    Quotes,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  background: white;
  width: 100vw;
  height: 800px;
  @media (max-width: 700px) {
    height: 100vh;
  }
}

.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  backdrop-filter: brightness(0.4);
  text-align: center;
}

.title {
  font-size: 70px;
  font-weight: 900;
  color: theme(light);
  font-family: 'Pacifico';
  @media (max-width: 700px) {
    font-size: 50px;
  }

  span {
    color: theme(sky);
  }
}

img {
  width: 250px;
  max-width: 40vw;
  filter: invert(0.5) brightness(1.6);
}
</style>
