<template>
  <codemirror v-model="code" :options="cmOptions" class="editor"></codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/oceanic-next.css'

export default {
  name: 'Editor',
  components: { codemirror },
  data() {
    return {
      cmOptions: {
        tabSize: 2,
        mode: 'application/javascript',
        json: true,
        theme: 'oceanic-next',
        lineNumbers: true,
        line: true,
      },
    }
  },
  props: {
    code: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.editor {
  height: 100%;
}

.CodeMirror {
  height: 100%;
  font-family: 'Overpass Mono';
  padding: 12px;
  font-size: 14px;
  overflow: hidden;
}

.cm-s-oceanic-next.CodeMirror,
.cm-s-oceanic-next .CodeMirror-gutters {
  background: none;
}

.cm-s-oceanic-next .CodeMirror-linenumber {
  color: white;
}

.CodeMirror pre {
  padding-left: 16px;
}

.cm-error {
  background: none;
}
</style>

<docs>
This editor is amazing, use it responsibly.

## Examples

```jsx
<Editor code='{ "awesome": "true" }' />
```
</docs>
