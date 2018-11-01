<template>
  <section class="sidebar">
    <Input type="text" placeholder="Search key names or patterns..." class="input" />
    <KeysList :keys="keys" />
  </section>
</template>

<script>
import KeysList from './KeysList'
import Input from '@/components/Input'

export default {
  name: 'Sidebar',
  components: { Input, KeysList },
  data() {
    return {
      keys: [
        { name: 'purchase_notification_for_user_4', type: 'string' },
        { name: 'stat:failed:2018-08-31', type: 'string' },
        { name: 'stat:failed:2018-10-19', type: 'string' },
        { name: 'stat:failed:2018-10-25', type: 'string' },
        { name: 'stat:processed:2018-10-25', type: 'string' },
        { name: 'stat:failed:2018-10-18', type: 'string' },
        { name: 'stat:failed:2018-09-25', type: 'string' },
        { name: 'stat:processed', type: 'string' },
        { name: 'dead', type: 'zset' },
        { name: 'stat:processed:2018-10-19', type: 'string' },
        { name: 'stat:processed:2018-09-27', type: 'string' },
        { name: 'purchase_notification_for_user_2', type: 'string' },
        { name: 'latest_blog_entry', type: 'string' },
        { name: 'stat:failed:2018-09-27', type: 'string' },
        { name: 'stat:processed:2018-09-25', type: 'string' },
        { name: 'nmbmn', type: 'list' },
        {
          name: 'purchase_notification_for_user_2770993',
          type: 'string',
        },
        { name: 'stat:processed:2018-10-26', type: 'string' },
        {
          name: 'Rubens-MacBook-Air.local:73286:804e6eca76d0',
          type: 'hash',
        },
        { name: 'stat:failed:2018-10-26', type: 'string' },
        {
          name: 'purchase_notification_for_user_2916651',
          type: 'string',
        },
        { name: 'processes', type: 'set' },
        { name: 'queues', type: 'set' },
        { name: 'stat:processed:2018-08-31', type: 'string' },
        { name: 'stat:failed', type: 'string' },
        { name: 'stat:processed:2018-10-18', type: 'string' },
        { name: 'purchase_notification_for_user_6', type: 'string' },
        { name: 'this:is:a:test', type: 'hash' },
      ],
    }
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

