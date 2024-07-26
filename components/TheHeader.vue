<script setup lang="ts">
const navLinks = [
  {
    label: 'Projects',
    icon: 'i-heroicons-briefcase',
    to: '/projects',
  },
  {
    label: 'Blog',
    icon: 'i-heroicons-book-open',
    to: '/blog',
  },
  {
    label: 'Contact',
    icon: 'i-heroicons-envelope',
    to: '/contact',
  },
];
</script>

<template>
  <header class="py-4 border-b border-gray-200 dark:border-gray-800">
    <UContainer :ui="{ base: 'flex justify-between items-center' }">
      <section class="relative">
        <NuxtLink to="/">
          <p class="text-2xl font-bold">
            <span class="text-primary">R</span>
            <span>afamed </span>
          </p>
        </NuxtLink>
        <UBadge color="primary" variant="outline" class="absolute top-0 text-[9px] font-bold -right-10 bg-primary/10"
          >DEV</UBadge
        >
      </section>

      <nav>
        <UHorizontalNavigation :links="navLinks" class="hidden md:block" />
      </nav>

      <section class="flex gap-2 md:gap-4">
        <UButton variant="ghost" :padded="false" color="black">
          <Icon name="heroicons:sun" size="24" />
        </UButton>
        <UButton variant="ghost" :padded="false" color="black" to="https://x.com/rafamed_dev" target="_blank">
          <Icon name="hugeicons:new-twitter" size="24" />
        </UButton>
        <UButton variant="ghost" :padded="false" color="black" to="https://github.com/rafamedtech/" target="_blank">
          <Icon name="hugeicons:github-01" size="24" />
        </UButton>
      </section>

      <section class="fixed bottom-4 right-4 md:hidden">
        <UDropdown :items="[navLinks]">
          <UButton icon="i-heroicons-bars-4" size="xl" :ui="{ rounded: 'rounded-full' }" />
        </UDropdown>
      </section>
    </UContainer>
  </header>
</template>
