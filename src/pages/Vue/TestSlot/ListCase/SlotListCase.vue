<template>
  <ul>
    <li v-if="!items.length">Loading...</li>
    <li v-for="item in items">
      <slot
        name="item"
        v-bind="item"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['api-url', 'per-page']);
const items = ref<Item[]>([]);

// mock remote data fetching
type Item = {
  body: string;
  username: string;
  likes: number;
};

setTimeout(() => {
  items.value = [
    { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
    { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
  ];
}, 1000);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}
li {
  padding: 5px 20px;
  margin: 10px;
  background: #fff;
}
</style>
