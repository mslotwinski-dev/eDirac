<script lang="ts">
import { defineComponent, compile, h } from 'vue/dist/vue.esm-bundler.js'

export default defineComponent({
  props: {
    render: {
      type: String,
      required: true,
    },
  },
  setup(props: { render: string }) {
    return () => h(compile(props.render))
  },
})
</script>
