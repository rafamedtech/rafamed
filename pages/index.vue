<script setup lang="ts">
const { latestPosts } = await usePost();

const { latestTemplates } = await useTemplate();

useSeoMeta({
  title: 'Rafamed - Home',
  description:
    'The ultimate resource for web developers seeking to learn and refine their skills using technologies around the Vue and UnJS ecosystems.',
});
</script>

<template>
  <main>
    <UContainer>
      <TheHero />
      <UDivider />

      <PageSection title="Embracing Modern technologies" type="column">
        <p class="text-lg">
          The goal of this place is to be the ultimate resource for web developers seeking to learn and refine their
          skills using technologies around the
          <span class="text-primary font-bold">Vue</span> and
          <span class="text-yellow-400 font-bold">UnJS</span> ecosystems.
        </p>
      </PageSection>

      <!-- Stack -->
      <PageSection title="This is the stack I use" type="grid" :columns="3">
        <StackCard v-for="stack in techStack" :key="stack.id" :stack="stack" />
      </PageSection>

      <!-- Blog -->
      <PageSection title="Latest blogposts" more="/blog" type="column">
        <PostCard v-for="post in latestPosts" :key="post._id" :post="post" />
      </PageSection>

      <!-- Templates -->
      <PageSection title="Latest templates" more="/templates" type="grid" :columns="3">
        <TemplateCard v-for="template in latestTemplates" :key="template.id" :template="template" />
      </PageSection>

      <!-- Contact -->
      <PageSection title="Get in touch" type="column">
        <p class="text-lg">
          I’m always open to new projects and collaborations. Let’s work together to create something amazing.
        </p>
        <div class="flex justify-center pt-4">
          <UButton size="xl" icon="i-heroicons-rocket-launch"> Contact me </UButton>
        </div>
      </PageSection>
    </UContainer>
  </main>
</template>
