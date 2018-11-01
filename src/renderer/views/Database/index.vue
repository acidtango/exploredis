<template>
  <section class="database">
    <Sidebar />
    <KeyDetail />
    <Footer />
  </section>
</template>

<script>
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import KeyDetail from './components/KeyDetail'

export default {
  name: 'Database',
  components: { KeyDetail, Footer, Sidebar },
}
</script>

<style lang="scss" scoped>
.database {
  background-color: #455262;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
}
</style>

