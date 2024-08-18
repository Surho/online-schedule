<template>
  <div class="event-card">
    {{ event }}
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: [Object, null],
    default: null,
  },
});
</script>

<style lang="scss">
.event-card {
}
</style>
