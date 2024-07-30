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
        <!-- <p class="text-lg pt-4">
          My goal is to provide a space where anyone can find detailed tutorials, practical guides, and other assets
          that make the process of creating robust and scalable web applications easier.
        </p> -->
      </PageSection>

      <!-- Guides and tutorials -->
      <PageSection title="Guides and tutorials" type="column"> Guides and tutorials </PageSection>

      <!-- Digital products -->
      <PageSection title="Digital products" type="column"> Digital products </PageSection>

      <!-- Blog -->
      <PageSection title="Blog" type="column"> Blog </PageSection>
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
