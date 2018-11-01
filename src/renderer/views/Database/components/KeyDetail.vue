<template>
  <section class="key-detail">
    <Editor :code="code" />
  </section>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  name: 'KeyDetail',
  components: { Editor },
  data() {
    return {
      code: `
{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {
          "value": "New",
          "onclick": "CreateNewDoc()"
        },
        {
          "value": "Open",
          "onclick": "OpenDoc()"
        },
        {
          "value": "Close",
          "onclick": "CloseDoc()"
        },
        {
          "value": "New",
          "onclick": "CreateNewDoc()"
        },
        {
          "value": "Open",
          "onclick": "OpenDoc()"
        },
        {
          "value": "Close",
          "onclick": "CloseDoc()"
        }
      ]
    }
	}
}
      `.trim(),
    }
  },
}
</script>

<style lang="scss" scoped>
.key-detail {
  overflow: hidden;
}
</style>

