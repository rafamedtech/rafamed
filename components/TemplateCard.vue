<script setup lang="ts">
import type { Template } from '@/types/main';

interface Props {
  template: Template;
}
const { template } = defineProps<Props>();

const { title, description, source, demo, stack, images } = toRefs(template);
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="font-bold">{{ title }}</h3>
    </template>

    <section class="flex flex-col gap-4">
      <img :src="images[0]" alt="" class="rounded-lg" />
      <p>{{ description }}</p>
      <section class="flex justify-center gap-4">
        <UButton size="sm" icon="i-heroicons-code-bracket" trailing :to="source"> View source </UButton>

        <UButton size="sm" icon="i-heroicons-rocket-launch" trailing :to="demo"> Go to demo </UButton>
      </section>
    </section>

    <template #footer>
      <div class="flex gap-2 flex-wrap justify-center">
        <UBadge v-for="item in stack" :key="item" size="sm" variant="outline" color="gray">
          {{ item }}
        </UBadge>
      </div>
    </template>
  </UCard>
</template>
