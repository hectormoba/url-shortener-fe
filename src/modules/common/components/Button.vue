<script setup lang="ts">
import type { OnClickButton } from "../domain/common.types";

interface ButtonProps {
  onClick?: OnClickButton;
  text?: string;
  type?: HTMLButtonElement["type"];
  variant?: "primary" | "secondary" | "tertiary";
}
const {
  onClick,
  text,
  type,
  variant = "secondary",
} = defineProps<ButtonProps>();
const finalClass = {
  primary: "button button-primary responsive_hover_button",
  secondary: "button button-secondary responsive_hover_button",
  tertiary: "button button-tertiary",
}[variant];
</script>
<template>
  <button :class="finalClass" @click="onClick" :type>
    <p v-if="text">{{ text }}</p>
    <slot v-else />
  </button>
</template>
<style scoped>
p {
  margin: 0;
}
.button {
  background-color: var(--background-color-gl);
  color: var(--text-color-gl);
  border: var(--text-color-gl) 0.075rem solid;
  border-radius: 0.3rem;
  padding: 10px 20px;
  cursor: pointer;
}

.button-primary {
  background-color: var(--background-color-main-action-gl);
  color: var(--text-color-main-action-gl);
  &:hover {
    background-color: var(--accent-color);
    color: var(--text-color-gl);
  }
}
</style>
