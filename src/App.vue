<script setup lang="ts">
import { computed } from "vue";
import MainLayout from "./modules/common/layout/MainLayout.vue";
import SimpleLayout from "./modules/common/layout/SimpleLayout.vue";
import { RouterView, useRoute } from "vue-router";
const route = useRoute();
const isMainLayout = computed(() => route.meta.layout === "main");
</script>
<template>
  <MainLayout v-if="isMainLayout">
    <RouterView />
  </MainLayout>
  <SimpleLayout v-else>
    <RouterView />
  </SimpleLayout>
</template>
