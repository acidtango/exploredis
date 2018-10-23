<template>
  <label>
    {{label}}
    <input
    :tabindex="tabindex"
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
  name: "Input",
  props: {
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    label: String,
    placeholder: String,
    tabindex: String
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
};
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
