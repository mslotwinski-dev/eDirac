<template>
  <footer>
    <div class="title">
      <span>e</span>DIRAC <span class="tm" v-html="'™'" />
    </div>
    <div class="flex">
      <Brands />
      <div>
        <div class="social_medias">
          <Social :key="media" v-for="media in socialMedia" :media="media" />
        </div>
        <div class="pages">
          <router-link to="/rules">Regulamin</router-link>
          <router-link to="/">Prywatność</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { socialMedia } from '@/data/misc/footer'
import Social from './Social.vue'
import Brands from './Brands.vue'

export default defineComponent({
  data() {
    return {
      socialMedia,
      year: new Date().getFullYear(),
    }
  },
  components: {
    Social,
    Brands,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

footer {
  background: theme(gray);
  display: flex;
  flex-direction: column;
  color: theme(dark);
  margin-top: 5rem;
  padding: 1rem;
}

.aard {
  width: 200px;
  padding: 10px;
}

.title {
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  font-family: 'Pacifico';
  span {
    color: theme(main);
  }
  .tm {
    font-family: 'Rubik';
    font-size: 40px;
  }
}

.flex {
  margin: 10px auto;
  width: 1600px;
  max-width: 95vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.pages {
  display: flex;
  justify-content: space-evenly;
}

.pages a {
  display: block;
  color: theme(dark);
}

.social_medias {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}
</style>
