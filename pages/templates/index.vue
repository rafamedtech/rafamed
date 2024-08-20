<script lang="ts" setup>
const { templates } = await useTemplate();

useSeoMeta({
  title: 'Templates',
  description: 'Free and payed templates for your next project.',
});
</script>

<template>
  <section>
    <UContainer class="mx-auto pt-12 pb-24">
      <PageHeading title="Templates" description="Free and payed templates for your next project." />

      <div class="pt-12 pb-6 grid lg:grid-cols-3 gap-4">
        <TemplateCard v-for="(template, index) in templates" :key="index" :template="template" />
      </div>
    </UContainer>
  </section>
</template>
