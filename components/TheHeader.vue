<template>
  <header class="py-4 border-b border-gray-200 dark:border-gray-800">
    <UContainer :ui="{ base: 'flex justify-between items-center' }">
      <Logo />
      <NavBar />

      <section class="flex gap-4">
        <ColorMode />
        <SocialLinks />
      </section>

      <section class="fixed bottom-4 right-4 md:hidden">
        <UDropdown :items="[navLinks]">
          <UButton icon="i-heroicons-bars-3-bottom-right" size="xl" />
        </UDropdown>
      </section>
    </UContainer>
  </header>
</template>
