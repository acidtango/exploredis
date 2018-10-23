<template>
  <form @submit.prevent="onSubmit">
    <Input v-model="form.host" label="Host" placeholder="localhost" />
    <Input v-model="form.port" label="Port" type="number" placeholder="6379" />
    <Input v-model="form.password" label="Password" type="password" />
    <Button label="Save" />
  </form>
</template>

<script>
import Button from '@/components/Button';
import Input from '@/components/Input';

export default {
  name: "ConnectionForm",
  components: { Button, Input },
  data() {
    return {
      form: {
        host: '',
        port: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

