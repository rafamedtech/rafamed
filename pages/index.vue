<template>
  <main>
    <UContainer>
      <section class="min-h-[60vh] flex items-center md:justify-between w-full flex-col md:flex-row gap-4">
        <section class="md:p-14 lg:p-16 h-full flex-1">
          <h1 class="text-5xl font-bold sm:text-7xl">
            Innovative Software <span class="text-primary">Solutions</span>
          </h1>
          <p class="text-lg mt-4">Crafting custom software to elevate your business</p>
        </section>

        <section class="flex justify-center md:justify-end flex-1 md:p-14 lg:p-16 md:pr-4">
          <img :src="avatar" alt="Avatar" class="w-56 h-56 md:h-72 md:w-72 lg:w-96 lg:h-96 object-cover" />
        </section>
      </section>

      <UDivider />

      <PageSection title="About me" type="column">
        <p class="text-lg">
          Hi, I’m Rafael, a passionate software developer dedicated to bringing your ideas to life through cutting-edge
          technology and innovative solutions. <br />
          I also write about modern technologies and how you can use them in real-life projects.
        </p>
      </PageSection>

      <PageSection title="What do I offer?" type="grid">
        <UCard v-for="{ id, title, description, icon } in services" :key="id">
          <template #header>
            <div class="flex gap-2 w-full items-center">
              <Icon :name="icon" class="text-primary text-4xl" />
              <h3 class="font-bold">{{ title }}</h3>
            </div>
          </template>

          <p>{{ description }}</p>
        </UCard>
      </PageSection>

      <PageSection title="Here's some of my work" type="grid">
        <UCard v-for="{ id, title, description, stack } in projects" :key="id">
          <template #footer>
            <div class="flex gap-2 w-full flex-col">
              <h3 class="font-bold">{{ title }}</h3>
              <div class="flex justify-between gap-2">
                <UBadge v-for="tec in stack" :key="tec" color="primary" variant="outline">{{ tec }}</UBadge>
              </div>
            </div>
          </template>

          <p>{{ description }}</p>
        </UCard>
      </PageSection>

      <section>
        <h2 class="text-4xl font-bold sm:text-5xl">Recent blog posts</h2>
        <section class="grid grid-cols-1 max-w-lg mx-auto gap-4 py-8">
          <UCard>
            <template #header>
              <h3 class="font-bold">Blog post title</h3>
            </template>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
          </UCard>
          <UCard>
            <template #header>
              <h3 class="font-bold">Blog post title</h3>
            </template>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
          </UCard>
          <UCard>
            <template #header>
              <h3 class="font-bold">Blog post title</h3>
            </template>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
          </UCard>
          <UCard>
            <template #header>
              <h3 class="font-bold">Blog post title</h3>
            </template>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.</p>
          </UCard>
        </section>
      </section>

      <section class="py-8">
        <h2 class="text-4xl font-bold sm:text-5xl">Get in touch</h2>
        <section class="py-8 max-w-lg mx-auto">
          <p class="text-lg">
            I’m always open to new projects and collaborations. Let’s work together to create something amazing.
          </p>
          <UButton color="primary" variant="outline" class="mt-4"> Contact me </UButton>
        </section>
      </section>
    </UContainer>

    <!-- main website footer -->
  </main>
</template>
