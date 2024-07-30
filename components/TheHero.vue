<template>
  <section
    class="min-h-[80vh] lg:max-h-[60vh] flex items-center md:justify-between w-full flex-col-reverse lg:flex-row text-center lg:text-left gap-4"
  >
    <section class="md:p-14 lg:p-16 h-full flex flex-col justify-around flex-1">
      <div>
        <h1 class="text-5xl font-bold sm:text-7xl">
          Your favorite <span class="text-primary">Vue</span> & <span class="text-yellow-400">UnJS</span> resource
        </h1>
        <p class="text-lg mt-4">You just don't know it yet</p>

        <div class="flex gap-2 justify-center lg:justify-start pt-8">
          <UButton size="xl" icon="i-heroicons-rocket-launch">Go to blog</UButton>
          <UButton color="gray" variant="outline" size="xl" icon="i-heroicons-document-arrow-down"
            >Explore templates</UButton
          >
        </div>
      </div>
    </section>

    <section class="flex justify-center md:justify-end flex-1 pt-8 lg:p-16 lg:pr-4 relative">
      <div
        class="absolute bg-primary inset-0 top-8 lg:inset-auto dark:bg-primary/60 md:w-96 lg:w-96 lg:h-96 blur-3xl lg:p-16 lg:pr-4 rounded-full"
      />
      <img :src="avatar" alt="Avatar" class="w-72 md:w-96 lg:w-96 lg:h-96 object-cover drop-shadow-2xl" />
    </section>
  </section>
</template>
