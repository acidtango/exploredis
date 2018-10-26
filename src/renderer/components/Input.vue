<template>
  <label>
    {{label}}
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #6f7788;
  font-weight: bold;
  font-size: 15px;
}
input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 2px solid #cdd9ed;
  color: #cbd1dc;
  font-size: 16px;
  line-height: 0;
  box-sizing: border-box;
  margin: 0.5rem 0 1rem;
}
</style>

<docs>
This button is amazing, use it responsibly.

## Examples

#### Default:
```jsx
<Input />
```

#### With label:
```jsx
<Input label="email" />
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
