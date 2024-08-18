<template>
  <div class="main">
    <div class="main__head">
      {{ new Date() }}
      <Date-nav />
    </div>
    <transition
      name="page"
      mode="out-in"
      appear
    >
      <main :key="$route.path">
        <div class="container">
          <slot />
        </div>
      </main>
    </transition>
  </div>
</template>

<script setup>
import DateNav from '@/components/dateNav.vue';
import {useDefaultStore} from '@/store/default.js';

const $default = useDefaultStore();
await $default.loadSpreadsheetData();
</script>

<style lang="scss">
.main {
  width: 100%;

  &__head {
    position: relative;
    overflow: hidden;
    background-color: $primary-dark;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 30px;
      background-color: white;
      bottom: 0;
      left: 0;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
    }
  }
}
</style>
