<template>
  <main>
    <h1>Расписание</h1>
    <NuxtLink to="/day/today">К расписанию</NuxtLink>
    <ClientOnly>
      <json-viewer
        :value="$default.getSchedule"
        :expand-depth=5
        copyable
        boxed
        sort></json-viewer>
    </ClientOnly>
  </main>
</template>

<script setup>
import {useDefaultStore} from '../store/default.js';
import JsonViewer from 'vue-json-viewer';

const $default = useDefaultStore();
await $default.loadSpreadsheetData();
</script>
