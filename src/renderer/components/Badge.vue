<template>
  <span class="badge">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',
}
</script>

<style lang="scss" scoped>
.badge {
  align-items: center;
  background: #8983be;
  border-radius: 2px;
  color: white;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-size: 10px;
  font-weight: 600;
  height: 18px;
  justify-content: center;
  min-width: 36px;
}
</style>

<docs>
This badge is amazing, use it responsibly.

## Examples

```jsx
<Badge>String</Badge>
```
</docs>
