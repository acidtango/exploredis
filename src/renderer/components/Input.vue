<template>
  <label>
    <span v-if="label">{{label}}</span>
    <input
    v-on="listeners"
    :type="type"
    :disabled="disabled"
    :readonly="readonly"
    :value="value"
    :autocomplete="autocomplete"
    :placeholder="placeholder"
    :aria-label="label"
  >
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    /**
     * Sets the input value
     */
    value: [String, Number],
    /**
     * Sets the input disabled state
     */
    disabled: Boolean,
    /**
     * Sets the input readOnly state
     */
    readonly: Boolean,
    /**
     * Sets the input type
     */
    type: {
      type: String,
      default: 'text',
    },
    /**
     * Sets the input autocomplete state
     */
    autocomplete: {
      type: String,
      default: 'off',
    },
    /**
     * Sets the label text
     */
    label: String,
    /**
     * Sets the placeholder text
     */
    placeholder: String,
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
label {
  display: block;
}

span {
  font-size: 14px;
  color: #6f7788;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  display: inline-block;
  margin-bottom: 4px;
}

input {
  width: 100%;
  min-height: 32px;
  transition: all 0.3s;
  border: 0;
  color: #333f4e;
  background: rgba(194, 204, 217, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px;
  font-size: 12px;

  &::placeholder {
    color: #333f4e;
  }
}
</style>

<docs>
This button is amazing, use it responsibly.

## Examples

#### For search:
```jsx
<Input placeholder="Search key names or patterns..." icon="search" />
```

#### With placeholder:
```jsx
<Input label="email" placeholder="harry@potter.com" />
```

#### With value:
```jsx
<Input label="email" value="harry@potter.com" />
```

#### Disabled:
```jsx
<Input label="email" value="harry@potter.com" disabled />
```

#### Read only:
```jsx
<Input label="email" value="harry@potter.com" readonly />
```
</docs>
