<script lang="ts" setup>
const { posts } = await usePost();

useSeoMeta({
  title: 'Blog',
  description: 'Blogposts, tutorials and guides about the vue ecosystem and related technologies.',
});
</script>

<template>
  <section>
    <UContainer class="mx-auto pt-12 pb-24">
      <PageHeading
        title="Blog"
        description="Blogposts, tutorials and guides about the vue and UnJS ecosystem and related technologies."
      />

      <div class="pt-12 lg:px-32 pb-6 grid gap-4">
        <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </UContainer>
  </section>
</template>
