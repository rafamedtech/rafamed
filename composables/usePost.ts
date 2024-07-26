export const usePost = async () => {
  const { slug } = useRoute().params;

  const posts = await queryContent('blog').sort({ id: -1 }).find();

  const currentPost = computed(() => posts.find((post) => post.slug === slug[0]));

  const similarPosts = computed(() =>
    posts.filter((post) => post.category === currentPost.value?.category && post.slug !== currentPost.value?.slug)
  );

  return { posts, currentPost, similarPosts };
};
