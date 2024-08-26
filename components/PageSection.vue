<script setup lang="ts">
interface Props {
  title: string;
  columns?: number;
  more?: string;
}
const { title, columns = 1, more = '/' } = defineProps<Props>();
</script>

<template>
  <section class="py-8 lg:py-16 flex flex-col items-center">
    <h2 class="text-3xl font-bold lg:text-5xl text-primary text-center">{{ title }}</h2>
    <section class="py-8 container-columns grid gap-4 max-w-4xl">
      <slot />
    </section>
    <UButton v-if="more" :to="more" size="xl" trailing variant="ghost" icon="i-heroicons-arrow-right">
      Explore more
    </UButton>
  </section>
</template>

<style scoped>
.container-columns {
  grid-template-columns: repeat(v-bind(columns), 1fr);
}
</style>
