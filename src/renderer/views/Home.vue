<template>
  <section>
    <!-- <ConnectionForm /> -->
    <Database />
  </section>
</template>

<script>
import ConnectionForm from '@/views/ConnectionForm.vue'
import Database from '@/views/Database'

export default {
  name: 'Home',
  components: {
    ConnectionForm,
    Database,
  },
}
</script>

<style lang="scss">
body {
  background: #f7fafd;
}
</style>

