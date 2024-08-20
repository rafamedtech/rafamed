<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

const { post } = defineProps<{
  post: ParsedContent;
}>();

const { _path: path, title, img, description, category } = post;
</script>

<template>
  <NuxtLink :to="path" class="group block w-full border hover:scale-[.97] transition border-transparent no-underline">
    <UCard class="group-hover:border-primary group-hover:shadow group-hover:shadow-primary">
      <div class="flex h-full flex-col items-center md:flex-row md:justify-between md:gap-8">
        <figure class="flex h-60 w-full items-center md:h-40 md:w-1/3 lg:h-60 lg:w-2/5">
          <img class="h-full w-full rounded-[2rem] object-cover object-center p-4" :src="img" :alt="title" />
        </figure>
        <div class="md:w-2/3 lg:w-3/5">
          <h3 class="mb-3 text-2xl font-semibold dark:text-gray-200 group-hover:text-primary">
            {{ title }}
          </h3>
          <p class="mb-3 text-base leading-relaxed dark:text-gray-200">{{ description }}</p>
          <span class="mb-3 block capitalize text-yellow-500 dark:text-yellow-400">#{{ category }}</span>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
