<template>
  <div class="day">
    <client-only>
      <div
        v-if="status === 'pending'"
        key="pending"
      >
        loading...
      </div>
      <div
        v-else-if="status === 'success'"
        class="day__main"
        key="success"
      >
        <Schedule :data="events" />
      </div>
      <div
        v-else
        key="error"
      >
        Ошибка
      </div>
    </client-only>
  </div>
</template>

<script setup>
import {useDefaultStore} from '@/store/default.js';
import {daysWeek} from '@/constants/index.js';
import Schedule from '@/components/schedule.vue';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const $route = useRoute();
const $default = useDefaultStore();

const {status} = storeToRefs($default);

const events = computed(() => {
  const schedule = $default.getScheduleByName($route.params.day)['floor1'];
  return groupByField(schedule, 'time');
});

definePageMeta({
  layout: 'main',
  middleware: [
    function(to) {
      if (to.params.day === 'today') {
        let dayIndex = new Date().getDay();
        dayIndex = dayIndex ? (dayIndex - 1) : 7;
        const dayName = Object.keys(daysWeek)[dayIndex];
        return navigateTo({name: 'day-day', params: {day: dayName}}, {redirectCode: 301});
      } else if (!daysWeek[to.params.day]) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Page Not Found',
        });
      }
    },
  ],
});
</script>

<style lang="scss">
.day {
  border: 1px solid $primary;
}
</style>
