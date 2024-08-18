<template>
  <nav class="date-nav">
    <div
      ref="scrollArea"
      class="container"
    >
      <NuxtLink
        v-for="(day, key , i) in daysWeek"
        :to="`/day/${key}`"
        :key="key"
        :class="[
          'date-nav__link', { 'date-nav--active': key === $route.params.day }
       ]"
        @click="test($event, i === Object.keys(daysWeek).length - 1)"
      >
        <p v-if="key === $route.params.day">
          {{ day.name }}
        </p>
        <p v-else>
          {{ day.short }}
        </p>
        <span>{{ new Date().getDate() }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { daysWeek } from '../constants/index.js';
import { ref } from 'vue';

const scrollArea = ref(null);

function test($event, lastEl) {
  if (lastEl) {
    setTimeout(() => {
      $event.target.scrollIntoView(
        {behavior: 'smooth', block: 'nearest', inline: 'start'},
      );
    }, 900);
  } else {
    $event.target.scrollIntoView(
      {behavior: 'smooth', block: 'nearest', inline: 'end'},
    );
  }
}
</script>

<style lang="scss">
.date-nav {
  padding: 60px 0 50px 0;

  &__link {
    max-width: 51px;
    display: block;
    padding: 8px 16px;
    border-radius: 12px;
    color: white;
    background-color: $primary;
    text-decoration: none;
    flex-shrink: 0;
    transition: max-width .3s linear;

    //&:has(+ .date-nav--active) {
    //  opacity: 0.85;
    //}
    //
    //.date-nav--active + & {
    //  opacity: 0.85;
    //}
  }

  &--active {
    max-width: 200px;
    color: $primary;
    background-color: white;
    pointer-events: none;
    animation: gelatine .3s ease-in-out;
  }

  .container {
    display: flex;
    gap: 0 8px;
    overflow-x: auto;
    scrollbar-width: none;

    @media (max-width: $breakpoint-xs) {
      padding: 0;

      & > *:first-child {
        margin-left: 20px;
      }

      & > *:last-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
