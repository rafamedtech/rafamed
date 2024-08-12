<script setup lang="ts">
// import type { ParsedContent } from '@nuxt/content';
// const blogPosts = await queryContent<ParsedContent>('/blog').limit(3).sort({ id: -1 }).find();
const blogPosts = await queryContent('/blog').limit(3).sort({ id: -1 }).find();
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

      <!-- Guides and tutorials -->
      <PageSection title="This is the stack I use" type="grid" :columns="3">
        <UCard
          v-for="{ id, title, icon } in techStack"
          :key="id"
          class="hover:shadow hover:shadow-green-500 transition group"
        >
          <div class="flex items-center gap-4">
            <Icon :name="icon" size="40" />
            <h3 class="text-lg font-bold group-hover:text-primary">{{ title }}</h3>
          </div>
        </UCard>
      </PageSection>

      <PageSection title="Latest templates" type="column">
        <div>
          <UCard> Work in progress </UCard>
        </div>
      </PageSection>

      <!-- Blog -->
      <PageSection title="Blog" type="column">
        <div class="flex flex-wrap py-6">
          <PostCard v-for="(post, index) in blogPosts" :key="index" :post="post" />
        </div>
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
