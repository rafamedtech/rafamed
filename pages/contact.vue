<script lang="ts" setup>
// const { templates } = await useTemplate();

useSeoMeta({
  title: 'Contact',
  description: "Let's work together",
});
</script>

<template>
  <section>
    <UContainer class="mx-auto pt-12 pb-24">
      <PageHeading title="Contact" description="You can find me on these places" />

      <section class="pt-12 pb-6 min-h-[50vh] max-w-lg mx-auto grid gap-4">
        <UCard>
          <template #header>
            <h3 class="text-primary font-bold">Email</h3>
          </template>

          <!-- Create a button with a mailto -->
          <NuxtLink to="mailto:rafa.ravg@gmail.com">rafamed.tech@gmail.com</NuxtLink>
        </UCard>
        <UCard>
          <template #header>
            <h3 class="text-primary font-bold">Twitter / X</h3>
          </template>

          <NuxtLink to="https://x.com/rafamed_dev" target="_blank">@rafamed_dev</NuxtLink>
        </UCard>
      </section>
    </UContainer>
  </section>
</template>
