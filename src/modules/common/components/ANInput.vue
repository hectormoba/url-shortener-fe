<script lang="ts" setup>
import { InputTypeHTMLAttribute } from "vue";

interface InputProps {
  type?: Extract<InputTypeHTMLAttribute, "number" | "email" | "text">;
  value: string;
}

const { type = "text", value } = defineProps<InputProps>();

const emit = defineEmits<{ changeEv: [value: string] }>();

const handleChange = (event: Event) => {
  emit("changeEv", (event.target as HTMLInputElement)?.value);
};
</script>
<template>
  <input :type :value @input="(event) => handleChange(event)" />
</template>
<style scoped>
input {
  background-color: var(--background-element-color-100-gl);
  color: var(--text-color-gl);
  border: var(--text-color-gl) 0.075rem solid;
  border-radius: 0.3rem;
  padding: 10px;
  width: 100%;
  margin: 0.5rem 0;
}
</style>
