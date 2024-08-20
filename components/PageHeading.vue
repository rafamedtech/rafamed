<script setup lang="ts">
const { title, description } = defineProps<{ title: string; description: string }>();
</script>

<template>
  <h2 class="text-3xl font-bold lg:text-5xl text-primary">{{ title }}</h2>
  <p class="text-lg text-neutral-500 mt-4">
    {{ description }}
  </p>
</template>
