<script setup lang="ts"></script>

<template>
  <section>
    <UDivider />
    <footer class="py-8">
      <UContainer :ui="{ base: 'flex justify-between items-center' }">
        <Logo />

        <!-- copyrights -->
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }}. All rights reserved.
        </p>

        <section class="flex gap-4">
          <!-- <ColorMode /> -->
          <SocialLinks />
        </section>

        <section class="fixed bottom-4 right-4 md:hidden">
          <UDropdown :items="[navLinks]">
            <UButton icon="i-heroicons-bars-3-bottom-right" size="xl" />
          </UDropdown>
        </section>
      </UContainer>
    </footer>
  </section>
</template>
