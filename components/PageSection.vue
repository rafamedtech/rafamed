<script setup lang="ts">
interface Props {
  title: string;
  type: 'column' | 'grid';
}
const { title, type } = defineProps<Props>();
</script>

<template>
  <section class="py-8 lg:py-16 flex flex-col items-center">
    <h2 class="text-4xl font-bold sm:text-5xl">{{ title }}</h2>
    <section class="py-8" :class="{ 'max-w-xl': type === 'column', 'grid grid-cols-3 gap-4': type === 'grid' }">
      <slot />
    </section>
  </section>
</template>
