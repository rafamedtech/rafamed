<script setup lang="ts">
// Similar posts
const { similarPosts } = await usePost();
</script>

<template>
  <main class="hero-pattern container prose py-8 lg:max-w-none">
    <UContainer
      class="mt-4 prose-headings:text-primary prose-h3:text-primary prose-p:text-lg dark:prose-p:text-gray-200 prose-a:text-primary dark:prose-blockquote:bg-[#1a1a1a] prose-blockquote:p-1 prose-strong:text-primary prose-em:text-primary"
    >
      <UButton size="xl" @click="navigateTo('/blog')">
        <Icon name="heroicons-solid:arrow-left" /> Back to Blog
      </UButton>

      <!-- Post content -->
      <div class="lg:px-32">
        <ContentDoc>
          <template v-slot="{ doc }">
            <img :src="doc.img" alt="" class="mx-auto rounded-2xl" :class="{ 'md:h-[500px]': doc.img }" />
            <h1>{{ doc.title }}</h1>

            <ContentRendererMarkdown :value="doc" />
          </template>
          <template #not-found>
            <div class="hero-pattern grid min-h-[75vh] place-items-center">
              <!-- <img src="@/static/notfound.png" alt="" class="mx-auto h-[500px]" /> -->
              <h1 class="font-base mb-4 text-center text-3xl text-accent">Post not found</h1>
              <NuxtLink
                to="/"
                class="flex items-center rounded-lg border-0 bg-primary py-2 px-2 text-base text-black no-underline hover:bg-primary/75 focus:outline-none md:mt-0 md:inline-flex md:px-6"
                >Return to Home</NuxtLink
              >
            </div>
          </template>
        </ContentDoc>
      </div>
    </UContainer>

    <UContainer>
      <!-- Related posts -->
      <section v-if="similarPosts?.length" class="lg:px-32">
        <h2 class="text-center text-3xl font-medium text-primary sm:text-4xl">Related posts</h2>

        <section class="grid gap-4">
          <PostCard v-for="post in similarPosts" :post="post" :key="post._id" />
        </section>
      </section>
    </UContainer>
  </main>
</template>
