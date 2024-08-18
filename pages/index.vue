<template>
  <main>
    <h1>Расписание на неделю</h1>
    <NuxtLink to="/day/today">
      К расписанию
    </NuxtLink>
  </main>
</template>

<script setup>
import {useDefaultStore} from '../store/default.js';

const $default = useDefaultStore();
// await $default.loadSpreadsheetData();
</script>
