<template>
  <section class="sidebar">
    <Input type="text" placeholder="Search key names or patterns..." class="input"/>
    <KeysList :keys="keys"/>
  </section>
</template>

<script>
import KeysList from './KeysList'
import Input from '@/components/Input'

export default {
  name: 'Sidebar',
  components: { Input, KeysList },
  props: ['keys'],
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #535f6e;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-width: 250px;
}

.input {
  margin: 12px;
}
</style>

