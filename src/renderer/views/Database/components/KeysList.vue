<template>
  <ul>
    <li :key="key.name" v-for="key in keys">
      <badge>{{type(key.type)}}</badge>
      <span class="name">{{key.name}}</span>
    </li>
  </ul>
</template>

<script>
import Badge from '@/components/Badge'

export default {
  name: 'KeysList',
  components: { Badge },
  props: {
    keys: {
      type: Array,
      default: [],
    },
  },
  methods: {
    type(type) {
      return type === 'string' ? 'str' : type
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  background-color: #535f6e;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: auto;
  width: 250px;
}

li {
  list-style: none;
  padding: 8px 12px;
  color: white;
  font-family: 'Overpass Mono', monospace;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;

  .name {
    margin-left: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }

  &:nth-child(even) {
    background-color: rgba(69, 82, 98, 0.35);
  }
}
</style>

