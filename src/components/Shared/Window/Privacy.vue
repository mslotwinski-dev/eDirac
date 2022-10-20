<template>
  <div class="container">
    <div class="background" />

    <div class="content">
      <div class="wait">Poczekaj!</div>
      <div class="inner">
        <div class="plz">
          Zanim przejdziesz dalej, możesz zaakceptować nasz regulamin?
        </div>
        <div>
          Wiem, że to może być uciążliwe, ale chcemy, ustanowić jasne zasady,
          aby to miejsce było przyjazne dla wszystkich, w tym również ciebie.
        </div>
        <div>
          Ponadto nasza strona internetowa używa plików cookies w celach
          statystycznych oraz funkcjonalnych. Dzięki nim nie musisz na przykład
          za każdym razem potwierdzać tej zgody, a zostanie ona zapamiętana na
          tym urządzeniu. Podstawą przetwarzania cookies jest oczywiście Twoja
          zgoda.
        </div>
      </div>
      <div class="buttons">
        <button class="read" @click="$router.push('/rules')">
          Pokaż regulamin
        </button>
        <button class="ok" @click="ok()">Jasne!</button>
      </div>
      <img src="@/assets/images/errors/duck.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    ok() {
      this.$store.commit('AcceptPrivacy')
      this.$emit('accepted')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2137;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(5px);
    background: theme(dark);
    opacity: 0.9;
  }
}

.content {
  width: 800px;
  height: 400px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  .wait {
    color: theme(light);
    font-weight: 500;
    font-size: 30px;
    margin: 10px;
    @media (max-width: 1000px) {
      font-size: 25px;
    }
  }
  .inner {
    flex-grow: 1;
    background: theme(light);
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding: 15px;
    font-size: 18px;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
    div {
      &.plz {
        font-weight: 500;
        font-size: 21px;
        @media (max-width: 1000px) {
          font-size: 19px;
        }
      }
      margin-bottom: 10px;
    }
  }
}

.buttons {
  text-align: right;
  margin: 5px;
}

button {
  padding: 10px;
  border-radius: 7px;
  margin: 5px;
  font-size: 18px;
  font-weight: 500;
  color: theme(light);
  transition: 0.2s all;
  &.ok {
    background: theme(main);
  }
  &.read {
    background: theme(violet);
  }

  &:hover {
    filter: brightness(1.15);
  }

  @media (max-width: 1000px) {
    padding: 8px;
    font-size: 16px;
  }
}

img {
  width: 200px;
  position: absolute;
  @media (min-width: 1001px) {
    left: -20%;
    bottom: -20%;
  }

  @media (max-width: 1000px) {
    width: 150px;
    top: -95px;
    right: 0;
  }
}
</style>
