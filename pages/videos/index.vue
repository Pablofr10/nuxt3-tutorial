<template>
  <div>
    <h1 class="text-4xl text-center">{{ $t("titulo") }}</h1>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
    >
      <UCard v-for="video in videos" :key="video.id">
        <template #header>
          {{ video.descricao }}
        </template>

        {{ formataData(video.data_postagem, "hh:mm") }}

        <iframe
          class="h-48 w-full"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
        />

        <template #footer>
          <div class="flex justify-between">
            <UButton @click="favoritar(video)">
              {{ $t("textoBotaoFavorito") }}
            </UButton>
            <NuxtLink
              :to="{
                name: 'videos-id',
                params: { id: video.id.toString() },
              }"
            >
              <UButton label="Ver vídeo" color="gray">
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" />
                </template>
              </UButton>
            </NuxtLink>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Video } from "@/interfaces/video";
import formataData from "~/utils/formataData";

definePageMeta({
  middleware: ["auth"],
});

const { $toast } = useNuxtApp();
const { locale } = useI18n();

const { adicionarFavorito } = useVideoStore();

const { data: videos, error } = await useFetch("/api/v1/videos");

const favoritar = (video: Video) => {
  adicionarFavorito(video);
  $toast.success("Adicionado aos favoritos!");
};

onMounted(() => {
  if (error.value) {
    $toast.error(error.value.statusMessage || "");
  }
});
</script>

<style scoped></style>
