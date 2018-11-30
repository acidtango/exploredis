<template>
  <section class="database">
    <Sidebar :keys="keys" :currentKey="currentKey"/>
    <KeyDetail :content="content" :currentKey="currentKey"/>
    <Footer/>
  </section>
</template>

<script>
import { ipcRenderer } from 'electron'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import KeyDetail from './components/KeyDetail'

export default {
  name: 'Database',
  components: { KeyDetail, Footer, Sidebar },
  data() {
    return {
      keys: [],
      content: '',
      currentKey: '',
    }
  },
  beforeMount() {
    ipcRenderer.send('@REDIS/connect', {
      port: 6379,
      host: 'localhost',
      password: '',
      db: 0,
    })

    ipcRenderer.on('@REDIS/connected', (event, data) => {
      this.keys = data.keys
      this.currentKey = data.keys[0].name
      ipcRenderer.send('@REDIS/KEY_FETCH', this.currentKey)
    })

    ipcRenderer.on('@REDIS/KEY_FETCH_SUCCESS', (event, data) => {
      this.content = data
    })
  },
}
</script>

<style lang="scss" scoped>
.database {
  background-color: #252a3c;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
}
</style>

