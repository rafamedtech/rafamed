<script setup lang="ts">
// Similar posts
const { similarPosts } = await usePost();
</script>

<template>
  <main class="py-8 lg:max-w-none">
    <UContainer class="mt-4 prose">
      <UButton size="xl" to="/blog" icon="i-heroicons-arrow-left" label="Back to Blog" class="no-underline" />

      <!-- Post content -->
      <div
        class="lg:px-32 prose-headings:text-primary prose-h3:text-primary prose-p:text-lg dark:prose-p:text-gray-200 prose-a:text-primary dark:prose-blockquote:bg-[#1a1a1a] prose-blockquote:p-1 prose-strong:text-primary prose-em:text-primary"
      >
        <ContentDoc>
          <template v-slot="{ doc }">
            <img :src="doc.img" alt="" class="mx-auto rounded-2xl shadow" :class="{ 'md:h-[500px]': doc.img }" />
            <h1>{{ doc.title }}</h1>

            <section v-if="doc.tags" class="flex gap-4">
              <span v-for="tag in doc.tags" class="text-yellow-500">#{{ tag }}</span>
            </section>

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

        <section class="grid gap-4 pt-8">
          <PostCard v-for="post in similarPosts" :post="post" :key="post._id" />
        </section>
      </section>
    </UContainer>
  </main>
</template>
