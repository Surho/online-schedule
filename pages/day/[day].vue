<template>
  <div class="day">
    <Date-nav />
    <Schedule :data="$default.getScheduleByName($route.params.day)" />
  </div>
</template>

<script setup>
import { useDefaultStore } from '@/store/default.js';
import { dayNames } from '@/constants/index.js';
import DateNav from '@/components/dateNav.vue';
import Schedule from '@/components/schedule.vue';
import { useRoute } from 'vue-router';

const $route = useRoute();

const name = computed(() => {
  console.log($default.getScheduleByName($route.params.day));
  return $default.getScheduleByName($route.params.day);
});

definePageMeta({
  middleware: [
    function (to) {
      if (to.params.day === 'today') {
        let dayIndex = new Date().getDay();
        dayIndex = dayIndex ? dayIndex : 7;
        const dayName = Object.keys(dayNames)[dayIndex];
        return navigateTo({ name: 'day-day', params: { day: dayName }}, { redirectCode: 301 })
      }
      else if (!dayNames[to.params.day]) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Page Not Found'
        })
      }
    },
  ],
});
const $default = useDefaultStore();
await $default.loadSpreadsheetData();
</script>

<style lang="scss">
</style>
