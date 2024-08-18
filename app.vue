<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
//.page-enter-active,
//.page-leave-active {
//  transition: all 0.3s;
//}
//.page-enter-from,
//.page-leave-to {
//  opacity: 0;
//  filter: blur(1rem);
//}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from {
  transform: translateX(100%);
}

.page-leave-to {
  transform: translateX(-100%);
}

.page-leave-from,
.page-enter-to {
  transform: translateX(0);
}

</style>

