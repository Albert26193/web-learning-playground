<template>
  <div>
    <slot
      :text="msg"
      :count="1"
    ></slot>
  </div>
</template>

<script setup lang="ts">
const msg = 'scoped slot test';
</script>
