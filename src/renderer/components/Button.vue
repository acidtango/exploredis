<template>
  <button
    :tabindex="tabindex"
    :type="type"
    :disabled="disabled"
    :aria-label="label"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    /**
     * Sets the button disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets the button tab index
     */
    tabindex: String,
    /**
     * Sets the button type
     */
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
button {
  background: #5628ee;
  padding: 10px 28px;
  color: white;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in;

  &:hover {
    background: #4420be; // TODO: Use color functions?
  }

  &:disabled {
    background: #947af4; // TODO: Use color functions?
  }
}
</style>

<docs>
This button is amazing, use it responsibly.

## Examples

```jsx
<Button>Push Me</Button>
```
</docs>
