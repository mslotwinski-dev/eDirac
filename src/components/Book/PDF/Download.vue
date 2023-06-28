<template>
  <div
    class="show"
    :style="{ background }"
    @click="showModal"
    v-html="$t('book.pdf.download')"
  />
  <Modal ref="modal">
    <div class="downloadinfo">
      <div class="icon">
        <ic icon="download" />
      </div>
      <div
        class="status"
        v-html="$t(`book.pdf.status.${false ? 'ok' : 'error'}`)"
      />
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Shared/Modals/Light.vue'

export default defineComponent({
  props: {
    background: String,
  },
  components: { Modal },
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

.show {
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  font-size: 21px;
  cursor: pointer;
  color: theme(light);
  margin: 10px 0;

  @media (max-width: 1000px) {
    width: 250px;
    padding: 8px;
    font-size: 19px;
  }
}

.downloadinfo {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.status {
  font-size: 25px;
}
.icon {
  margin: 10px;
  font-size: 60px;
}
</style>
