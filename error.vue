<template>
  <NuxtLayout>
    <div
      v-if="error"
      class="error-page"
    >
      <template v-if="error.statusCode === 404">
        <h1>Страница не найдена</h1>
        <p>{{ error.statusMessage }}: {{ error.url }}</p>
      </template>
      <template v-else>
        <h1>Произошла ошибка: {{ error.statusCode }}</h1>
        <p>{{ error.statusMessage }}: {{ error.url }}</p>
      </template>
      <button @click="backHome">
        На главную
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

function backHome() {
  clearError({
    redirect: '/',
  });
}
</script>

<style lang="scss">
</style>
