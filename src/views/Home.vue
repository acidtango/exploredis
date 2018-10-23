<template>
  <section>
    <ConnectionForm />
  </section>
</template>

<script>
import ConnectionForm from "@/views/ConnectionForm.vue";

export default {
  name: "Home",
  components: {
    ConnectionForm
  }
};
</script>

<style lang="scss">
body {
  background: #F7FAFD;
}
</style>

