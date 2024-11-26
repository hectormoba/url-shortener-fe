<script lang="ts" setup>
interface CardProps {
  templateRows?: string;
}

const { templateRows = "1fr" } = defineProps<CardProps>();
</script>
<template>
  <div class="card" :style="{ 'grid-template-rows': templateRows }">
    <slot />
  </div>
</template>
<style scoped>
.card {
  background-color: var(--background-element-color-400-gl);
  color: var(--text-color-gl);
  border: var(--text-color-gl) 0.15rem solid;
  border-radius: 0.225rem;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
</style>
