<template>
  <section class="relative">
    <NuxtLink to="/" class="text-2xl font-bold">
      {{ mainTitle }}
    </NuxtLink>
    <UBadge
      v-if="badge"
      color="primary"
      variant="outline"
      class="absolute top-0 text-[9px] font-bold -right-10 bg-primary/10 uppercase"
      >{{ badge }}</UBadge
    >
  </section>
</template>
