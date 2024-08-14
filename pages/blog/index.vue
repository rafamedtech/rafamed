<script lang="ts" setup>
// All posts
const { posts } = await usePost();

useHead({
  title: 'Blog - Rafamed',
  meta: [
    {
      name: 'description',
      content: 'Blog posts',
    },
  ],
});
</script>

<template>
  <section>
    <UContainer class="mx-auto pt-12 pb-24">
      <h2 class="text-3xl font-bold lg:text-5xl text-primary text-center">Blog</h2>

      <div class="pt-12 pb-6 grid gap-4">
        <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </UContainer>
  </section>
</template>
