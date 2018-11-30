<template>
  <section class="sidebar">
    <Input type="text" placeholder="Search key names or patterns..." class="input"/>
    <KeysList :keys="keys"/>
  </section>
</template>

<script>
import { ipcRenderer } from 'electron'
import KeysList from './KeysList'
import Input from '@/components/Input'

export default {
  name: 'Sidebar',
  components: { Input, KeysList },
  data() {
    return {
      keys: [],
    }
  },
  beforeMount() {
    ipcRenderer.send('@REDIS/connect', {
      port: 6379,
      host: 'localhost',
      password: '',
      db: 0,
    })

    ipcRenderer.on('@REDIS/connected', (event, data) => (this.keys = data.keys))
  },
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

