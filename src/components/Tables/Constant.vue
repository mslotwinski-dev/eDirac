<template>
  <article :class="{ activate }" @click="showModal">
    <div class="name" v-html="$t(`tables.${name.toLowerCase()}.name`)" />
    <div class="formula" v-if="constant.type == 'formula'">
      <div
        v-html="
          katex.renderToString(`${constant.content[0]}`, {
            throwOnError: false,
            trust: true,
          })
        "
      />
    </div>
  </article>
  <Modal ref="modal">
    <div class="modalcontent">
      <div class="name sec" v-html="$t(`tables.${name.toLowerCase()}.name`)" />
      <div class="def" v-html="$t(`tables.${name.toLowerCase()}.for`)" />

      <div class="sec">
        <div class="sec-title" v-html="$t(`tables.eq`)" />
        <div v-for="(f, index) in constant.content" :key="index">
          <div
            v-html="
              katex.renderToString(`\\displaystyle ${f}`, {
                throwOnError: false,
                trust: true,
              })
            "
          />
        </div>
      </div>

      <div class="sec">
        <div class="sec-title" v-html="$t(`tables.in`)" />
        <div v-for="(f, index) in constant.in" :key="index">
          <div
            v-html="
              katex.renderToString(`\\displaystyle ${f}`, {
                throwOnError: false,
                trust: true,
              })
            "
            class="formula"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Shared/Modals/Light.vue'
import katex from 'katex'

export default defineComponent({
  props: {
    activate: Boolean,
    name: String,
    constant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      katex,
      expand: false,
    }
  },
  components: {
    Modal,
  },
  methods: {
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  padding: 10px 20px;
  margin: 5px;
  background: theme(light);
  border-radius: 10px;
  .name {
    font-weight: 500;
    margin-bottom: 5px;
  }
  width: 400px;
  max-width: 90vw;
  flex-grow: 1;

  cursor: pointer;
}

.activate {
  background: theme(gray);
}

.modalcontent {
  padding: 10px 25px;
  @media (max-width: 1000px) {
    padding: 7px 10px;
  }
  .sec {
    padding: 5px 0;
  }
  .sec-title {
    font-size: 18px;
    margin: 10px 0;
    font-weight: 500;
  }
  .def {
    font-size: 17px;
    padding: 5px 0;
    max-width: 800px;
    text-align: justify;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
  .name {
    font-weight: 500;
    font-size: 25px;
    @media (max-width: 1000px) {
      font-size: 22px;
    }
  }

  .formula {
    margin: 7px 0;
  }
}
</style>
