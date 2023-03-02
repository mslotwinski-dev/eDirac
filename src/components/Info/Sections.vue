<template>
  <div class="info-class-global">
    <Beginnings />
    <Activity />
    <GoalsAndPlans />
    <Software />
    <Donate />
    <Sponsors />
    <Thanks />
    <Authors />
    <Join />
    <Contact />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue'
import Beginnings from './sections/Beginnings.vue'
import Activity from './sections/Activity.vue'
import GoalsAndPlans from './sections/GoalsAndPlans.vue'
import Software from './sections/Software.vue'
import Sponsors from './sections/Sponsors.vue'
import Authors from './sections/Authors.vue'
import Thanks from './sections/Thanks.vue'
import Donate from './sections/Donate.vue'
import Join from './sections/Join.vue'
import Contact from './sections/Contact.vue'

export default defineComponent({
  components: {
    Beginnings,
    Activity,
    GoalsAndPlans,
    Software,
    Sponsors,
    Authors,
    Thanks,
    Donate,
    Join,
    Contact,
  },
})
</script>

<style lang="scss">
@import '@/styles/index.scss';
.info-class-global {
  > div {
    min-height: 20vh;
    padding: 10px;
  }
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: 35px;
    margin: 10px;

    font-weight: 500;
    @media (max-width: 1175px) {
      font-size: 26px;
      margin: 8px;
    }
  }

  h3 {
    text-align: center;
    font-size: 22px;
    margin: 15px;
    font-weight: 400;
    @media (max-width: 1175px) {
      font-size: 16px;
      margin: auto;
      width: 80vw;
    }
  }

  section {
    width: 1000px;
    max-width: 95vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      font-size: 16.5px;

      @media (max-width: 1000px) {
        font-size: 14px;
      }
    }
  }
}
</style>
