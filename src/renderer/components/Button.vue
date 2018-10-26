<template>
  <button
    :tabindex="tabindex"
    :type="type"
    :disabled="disabled"
    :aria-label="label"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    disabled: String,
    tabindex: String,
    type: String,
  }
};
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
