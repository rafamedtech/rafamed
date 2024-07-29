<script setup lang="ts"></script>

<template>
  <UButton
    v-for="socialLink in socialLinks"
    variant="ghost"
    :padded="false"
    color="black"
    :to="socialLink.url"
    target="_blank"
  >
    <Icon :name="socialLink.icon" size="24" />
  </UButton>
</template>
