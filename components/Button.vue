<template>
  <button
    v-bind="$attrs"
    class="waves-effect waves-light btn"
    :class="customClass"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
