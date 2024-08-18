<template>
  <section class="schedule">
    <p>test text</p>
    <vue-json-pretty :data="data" />
  </section>
</template>

<script setup>
import VueJsonPretty from 'vue-json-pretty';

defineProps({
  data: {
    type: [Object, Number, null],
    default: null,
  },
});
</script>

<style lang="scss">
.schedule {
  p {
    //color: $primary;
  }
}
</style>
