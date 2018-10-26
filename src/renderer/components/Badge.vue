<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
span {
  align-items: center;
  background: #8983be;
  border-radius: 2px;
  color: white;
  display: flex;
  font-family: 'Overpass Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  height: 18px;
  justify-content: center;
  width: 32px;
}
</style>

<docs>
This badge is amazing, use it responsibly.

## Examples

```jsx
<Badge>String</Badge>
```
</docs>
