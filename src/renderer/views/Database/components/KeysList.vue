<template>
  <section>
    <header>
      <h4>
        <span>type</span>
        <span class="name">name</span>
      </h4>
      <nav>
        <button>Add</button>
        <button>Ref</button>
      </nav>
    </header>
    <ul>
      <li :key="key.name" v-for="key in keys">
        <badge :background="backgrounds[key.type]">{{type(key.type)}}</badge>
        <span class="name">{{key.name}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Badge from '@/components/Badge'

export default {
  name: 'KeysList',
  components: { Badge },
  data() {
    return {
      backgrounds: {
        string: '#566DA6',
        list: '#0F9AA0',
        hash: '#BD4A9A',
        set: '#03A27A',
        zset: '#BD4A9A',
      },
    }
  },
  props: {
    keys: {
      type: Array,
      default: [],
    },
  },
  methods: {
    type(type) {
      return type === 'string' ? 'STR' : type.toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: white;
  margin: 12px 12px 16px;
}

h4 {
  margin: 0;

  span {
    display: inline-block;
  }
}

.name {
  margin-left: 20px;
}

ul {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
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

