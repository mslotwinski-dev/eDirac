<template>
  <header>
    <OfficialLogo />
    <div class="subtitle">
      {{ $t('home.slogan') }}
    </div>
    <Buttons />
  </header>
  <Sections />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OfficialLogo from '@/components/Shared/OfficialLogo.vue'
import Buttons from '@/components/Info/Buttons.vue'
import Sections from '@/components/Info/Sections.vue'

export default defineComponent({
  components: {
    OfficialLogo,
    Buttons,
    Sections,
  },
  created() {
    document.title = 'Informacje | eDirac'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/images/info/hero.jpg');
  background-size: cover;
  background-position: center;
  padding-top: $height;
  &:after {
    content: '';
    background: linear-gradient(theme(dark), transparent);
    width: 100vw;
    height: calc(2.5 * $height);
    position: absolute;
    top: 0;
  }
}

.subtitle {
  text-align: center;
  margin: 10px;
  padding: 10px;
  color: theme(light);
  font-weight: 500;
  background-color: #e3e3e3d0;
  color: theme(dark);
  border-radius: 10px;
  font-size: 32px;
  @media (max-width: 1000px) {
    font-size: 26px;
    max-width: 90vw;
  }
}
</style>
