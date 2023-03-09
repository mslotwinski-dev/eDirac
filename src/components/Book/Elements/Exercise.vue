<template>
  <li>
    <div
      class="global-exercise-class"
      :class="{
        hint: show == 1,
        solution: show == 2,
        answer: show == 3,
        hh: !s.includes('h'),
        hs: !s.includes('s'),
        ha: !s.includes('a'),
      }"
    >
      <slot />
      <div class="container">
        <div
          v-for="(button, index) in [
            ['hint', 'lightbulb'],
            ['solution', 'feather-pointed'],
            ['answer', 'eye'],
          ]"
          :key="index"
          class="button-show"
          :class="button[0]"
          @click="show == index + 1 ? (show = 0) : (show = index + 1)"
        >
          <ic :icon="button[1]" />Wskazówka
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    s: String,
  },
  data() {
    return {
      show: 0,
    }
  },
})
</script>
