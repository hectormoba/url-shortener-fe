<script lang="ts" setup>
import Button from "@/modules/common/components/Button.vue";
import { getQuery } from "@/api/handler";
import { createShortLink } from "../services/createShortLink";
import { CreateShortLinkResponse } from "../domain/request.types";
async function handleSubmit(e: Event) {
  e.preventDefault();
  const { data, isError, isSuccess } = await getQuery<CreateShortLinkResponse>({
    getFn: createShortLink,
  });
  if (isSuccess) {
    console.log(data);
  }
}
</script>

<template>
  <section>
    <form>
      <input />
      <Button
        type="submit"
        :onClick="async (e) => await handleSubmit(e)"
        text="Button"
      />
    </form>
  </section>
</template>
