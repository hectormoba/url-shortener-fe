<script lang="ts" setup>
import Chip from "@/modules/common/components/Chip.vue";
import { postQuery } from "@/api/handler";
import { createShortLink } from "../services/createShortLink";
import ANInput from "@/modules/common/components/ANInput.vue";
import Card from "@/modules/common/components/Card.vue";
import { ref } from "vue";

const inputLink = ref("");
async function handleSubmit(e: Event) {
  e.preventDefault();
  const { data, isError, isSuccess } = await postQuery({
    postFn: () => createShortLink(inputLink.value),
  });
  if (isSuccess) {
    console.log(data);
  }
}
</script>

<template>
  <section>
    <Card templateRows="repeat(4, 1fr)">
      <form>
        <ANInput :value="inputLink" @change-ev="(val) => (inputLink = val)" />
        <Chip
          type="submit"
          :onClick="async (e) => await handleSubmit(e)"
          text="Create link"
          animationOff
        />
      </form>
    </Card>
  </section>
</template>
