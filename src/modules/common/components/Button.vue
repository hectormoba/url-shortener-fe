<script setup lang="ts">
type OnClickButton = (
  e: Event
) => void | Promise<void> | (() => void) | ((e: Event) => void);

interface ButtonProps {
  onClick: OnClickButton;
  text: string;
  type?: HTMLButtonElement["type"];
}
const { onClick, text, type } = defineProps<ButtonProps>();
</script>
<template>
  <button class="button" @click="onClick" :type>
    <p>{{ text }}</p>
  </button>
</template>
