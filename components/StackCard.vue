<script setup lang="ts">
import type { Stack } from '@/types/main';

const { stack } = defineProps<{
  stack: Stack;
}>();

const { title, icon } = toRefs(stack);
</script>

<template>
  <UCard class="hover:shadow hover:shadow-green-500 transition-all group hover:scale-[.96]">
    <div class="flex justify-center items-center gap-4">
      <Icon :name="icon" size="40" />
      <h3 class="text-lg font-bold group-hover:text-primary">{{ title }}</h3>
    </div>
  </UCard>
</template>
