<script setup lang="ts">
interface Props {
  title: string;
  type?: 'column' | 'grid';
  columns?: 1 | 2 | 3 | 4;
}
const { title, type = 'column', columns } = defineProps<Props>();
</script>

<template>
  <section class="py-8 lg:py-16 flex flex-col items-center">
    <h2 class="text-3xl font-bold lg:text-5xl text-center">{{ title }}</h2>
    <section
      class="py-8"
      :class="{
        'max-w-xl': type === 'column',
        'grid gap-4': type === 'grid',
        'grid-cols-4': columns === 4,
        'grid-cols-3': columns === 3,
        'grid-cols-2': columns === 2,
      }"
    >
      <slot />
    </section>
  </section>
</template>
