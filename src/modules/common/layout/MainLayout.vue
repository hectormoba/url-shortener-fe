<script setup lang="ts">
import { RouterLink } from "vue-router";
import Button from "@/modules/common/components/Button.vue";
import LishLogo from "@/assets/lish_logo.png";
</script>

<template>
  <main>
    <header>
      <div class="logo">
        <img :src="LishLogo" alt="Lish logo" />
      </div>
      <nav>
        <li>
          <Button text="Theme" />
        </li>
        <li>
          <Button>
            <RouterLink class="router_link" to="/">Home</RouterLink>
          </Button>
        </li>
        <li>
          <Button variant="primary">
            <RouterLink class="router_link" to="/login">Login</RouterLink>
          </Button>
        </li>
      </nav>
    </header>
    <slot />
  </main>
</template>
<style scoped>
main {
  display: grid;
  grid-template-rows: 20vh 1fr;
  background-color: var(--background-color-gl);
}
header {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 20px;
}
nav {
  grid-column: 8 / 11;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}
li {
  list-style: none;
}

.logo {
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
}
</style>
