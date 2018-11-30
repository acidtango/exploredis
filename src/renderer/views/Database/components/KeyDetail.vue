<template>
  <section class="key-detail">
    <Editor :code="code"/>
  </section>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  name: 'KeyDetail',
  components: { Editor },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    // TODO: This is something specific of strings, we need to
    // split this component into specific renderers for each key type
    code: function() {
      if (!this.content) return

      try {
        const code = JSON.parse(this.content)
        const isValid = code && typeof code === 'object' && code !== null

        return isValid ? JSON.stringify(code, null, '\t') : this.content
      } catch (error) {
        console.log(error)
        return this.content
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.key-detail {
  overflow: hidden;
}
</style>

