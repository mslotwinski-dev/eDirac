OPEN ELEMENT:

<div @click="showModal"></div>

DEF MODAL:

<Modal ref="modal">
"Content"
</Modal>

METHOD (IN OPEN ELEMENT'S COMPONENT)

showModal() {
const modal = this.$refs.modal as InstanceType<typeof Modal>
if (modal) modal.toggleModal()
},
