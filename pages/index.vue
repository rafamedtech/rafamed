<script setup lang="ts">
import menuApp from '@/assets/img/menu-app.png';
import invoiceApp from '@/assets/img/invoice-app.png';
import mealpreps from '@/assets/img/mealpreps.png';

const { latestPosts } = await usePost();

const templates = [
  {
    id: 1,
    title: 'Restaurant menu app',
    description: 'A simple restaurant menu app built with Vue 3 and Vite',
    stack: ['Vue 3', 'Vite'],
    images: [menuApp],
    url: '/templates/vue3-vite',
  },
  {
    id: 2,
    title: 'Invoice app',
    description: 'A simple invoice app built with Vue 3 and Vite',
    stack: ['Vue 3', 'Vite', 'TailwindCSS'],
    images: [invoiceApp],
    url: '/templates/vue3-vite-tailwindcss',
  },
  {
    id: 3,
    title: 'Vue 3 + Vite + TailwindCSS + TypeScript',
    description: 'A simple Vue 3 + Vite + TailwindCSS + TypeScript template',
    stack: ['Vue 3', 'Vite', 'TailwindCSS', 'TypeScript'],
    images: [mealpreps],
    url: '/templates/vue3-vite-tailwindcss-typescript',
  },
];
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
          class="hover:shadow hover:shadow-green-500 transition-all group hover:scale-[.96]"
        >
          <div class="flex items-center gap-4">
            <Icon :name="icon" size="40" />
            <h3 class="text-lg font-bold group-hover:text-primary">{{ title }}</h3>
          </div>
        </UCard>
      </PageSection>

      <!-- Blog -->
      <PageSection title="Latest blogposts" type="column">
        <PostCard v-for="(post, index) in latestPosts" :key="index" :post="post" />

        <section class="flex justify-center pt-4">
          <UButton size="xl" variant="ghost" icon="i-heroicons-arrow-right" trailing to="/blog">
            Explore more posts
          </UButton>
        </section>
      </PageSection>

      <!-- Templates -->
      <PageSection title="Latest templates" more="/templates" type="grid" :columns="3">
        <UCard v-for="template in templates">
          <template #header>
            <h3 class="font-bold">{{ template.title }}</h3>
          </template>

          <section class="flex flex-col gap-4">
            <img :src="template.images[0]" alt="" class="rounded-lg" />
            <p>{{ template.description }}</p>
            <section class="flex justify-center gap-4">
              <UButton size="sm" icon="i-heroicons-code-bracket" trailing :to="template.url"> View source </UButton>

              <UButton size="sm" icon="i-heroicons-rocket-launch" trailing :to="template.url"> Go to demo </UButton>
            </section>
          </section>

          <template #footer>
            <div class="flex gap-2 flex-wrap justify-center">
              <UBadge v-for="stack in template.stack" :key="stack" size="sm" variant="outline" color="gray">
                {{ stack }}
              </UBadge>
            </div>
          </template>
        </UCard>
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
