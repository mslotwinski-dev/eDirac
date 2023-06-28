<template>
  <article>
    <div class="title" v-html="book.Title" @click="showModal" />
    <Modal size="3" padding="none" ref="modal">
      <Header :book="book" />
      <Description :book="book" />
    </Modal>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { romanize } from '@/scripts/canvas/canvas'

import Header from './Info/Header.vue'
import Description from './Info/Description.vue'
import Modal from '@/components/Shared/Modals/Light.vue'
import { Book } from '@/data/types/book'

export default defineComponent({
  props: {
    book: Object as () => Book,
  },
  methods: {
    romanize,
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
  },
  data() {
    return { hover: false }
  },
  components: {
    Modal,
    Header,
    Description,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  font-size: 20px;
  // background: red;
  margin: 5px;
  width: 800px;
  max-width: 92vw;
  background-color: theme(dark);
  border-radius: 10px;
  padding: 10px;
  color: theme(light);
  @media (max-width: 1000px) {
    margin: 3px 5px;
  }
}

.title {
  cursor: pointer;

  font-weight: 500;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}

// .part {
//   width: 400px;
//   height: 225px;
//   max-width: 90vw;
//   border-radius: 10px;
//   background: #e3e3e3;
//   overflow: hidden;
//   margin: 10px;
//   display: flex;
//   justify-content: center;

//   @media (max-width: 1000px) {
//     height: 200px;
//   }
// }

// .thumb {
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   flex-shrink: 0;
//   transition: all 0.4s ease-in;
// }

// .abs {
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 83%;
//   font-weight: 500;
//   background: #28353ab0;
//   color: theme(light);
//   text-align: center;
//   border-top-left-radius: 10px;
//   padding: 10px;
//   font-size: 20px;
//   backdrop-filter: blur(5px);
//   transition: 0.3s all ease-in;
// }

// .text {
//   text-align: center;
//   flex-grow: 1;
//   .text-abs {
//     position: absolute;
//     padding: 15px;

//     width: 315px;
//     height: 100%;
//   }
//   .t {
//     font-size: 25px;
//     text-transform: uppercase;
//     font-weight: 400;
//     @media (max-width: 1000px) {
//       font-size: 22px;
//     }
//   }

//   .v {
//     text-transform: uppercase;
//     margin-bottom: 10px;
//     font-size: 20px;
//     @media (max-width: 1000px) {
//       font-size: 18px;
//       margin-bottom: 5px;
//     }
//   }

//   .s {
//     font-size: 16px;
//     @media (max-width: 1000px) {
//       font-size: 15px;
//     }
//   }
// }

// .hovered {
//   .abs {
//     transform: translateY(100%);
//   }

//   .thumb {
//     width: 85px;
//   }
// }
</style>
