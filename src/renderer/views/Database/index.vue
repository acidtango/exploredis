<template>
  <section class="database">
    <Sidebar />
    <div>content</div>
    <Footer />
  </section>
</template>

<script>
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default {
  name: 'Database',
  components: { Footer, Sidebar },
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

