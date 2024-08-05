<template>
  <section class="schedule">
    <ClientOnly>
      <json-viewer
        :value="data"
        expanded="true"
        :expand-depth="5"
      />
    </ClientOnly>
  </section>
</template>

<script setup>
import JsonViewer from 'vue-json-viewer';

defineProps({
  data: {
    type: [Object, Number, null],
    default: null,
  }
})
</script>

<style lang="scss">
.schedule {

}
</style>
