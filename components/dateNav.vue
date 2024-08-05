<template>
  <nav class="date-nav">
    <NuxtLink
      v-for="(label, name) in dayNames"
      :to="`/day/${name}`"
      :key="name"
      :class="[
          'date-nav__link', { 'date-nav--active': name === $route.params.day }
       ]"
    >
      {{ label }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import { dayNames } from '../constants/index.js';
</script>

<style lang="scss">
.date-nav {
  display: flex;
  gap: 0 8px;

  &__link--active {
    pointer-events: none;
  }
}
</style>
