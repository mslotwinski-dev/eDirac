<template>
  <div class="background" v-if="display">
    <div class="bgclick" @click="toggleModal" />
    <section class="modal">
      <div class="content">
        <div class="close" @click="toggleModal">
          <ic icon="times" />
        </div>
        <slot />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
  data() {
    return {
      display: false,
    }
  },
  methods: {
    toggleModal() {
      this.display = !this.display
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9;
  background: #28353aa0;
  backdrop-filter: blur(3.5px);
}
.modal {
  width: 1000px;
  height: 600px;
  max-height: 80vh;
  max-width: 95vw;
  background: theme(dark);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 27px;
  cursor: pointer;
}
.content {
  width: 100%;
  flex-grow: 1;
  background: theme(light);
  border-radius: 20px;
  padding: 10px;
  text-align: left;
}
.bgclick {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
