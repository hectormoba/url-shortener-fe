<script lang="ts" setup>
import type { OnClickButton } from "../domain/common.types";

interface ChipProps {
  onClick?: OnClickButton;
  text: string;
  animationOff?: boolean;
  variant?: "button" | "aux";
  type?: HTMLButtonElement["type"];
}

const {
  onClick,
  text,
  type,
  animationOff = false,
  variant = "button",
} = defineProps<ChipProps>();

const isButton = variant === "button";
</script>
<template>
  <button
    class="chip"
    :class="{ responsive_hover_button: !animationOff }"
    v-if="isButton"
    :type
    @click="onClick"
  >
    <p>{{ text }}</p>
  </button>
  <div v-else class="chip">
    <p>{{ text }}</p>
  </div>
</template>
<style scoped>
p {
  margin: 0;
}
.chip {
  background-color: var(--background-color-gl);
  color: var(--text-color-gl);
  border: var(--text-color-gl) 0.075rem solid;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
}
</style>
