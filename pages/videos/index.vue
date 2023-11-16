<template>
  <h1 class="text-4xl text-center">{{ $t("titulo") }}</h1>
  <div
    class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
  >
    <UCard v-for="video in videos" :key="video.id">
      <template #header>
        {{ video.descrição }}
      </template>

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
</template>

<script setup lang="ts">
import { Video } from "@/interfaces/video";

const { $toast } = useNuxtApp();
const { locale } = useI18n();

const { adicionarFavorito } = useVideoStore();

const videos: Video[] = [
  {
    id: 1,
    descrição: "01 - Introdução e Instalação",
    url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
    data_postagem: "2023-10-15",
  },
  {
    id: 2,
    descrição: "02 - Configuração",
    url: "https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ",
    data_postagem: "2023-10-20",
  },
  {
    id: 3,
    descrição: "03 - Pages",
    url: "https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX",
    data_postagem: "2023-10-10",
  },
  {
    id: 4,
    descrição: "04 - Components",
    url: "https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja",
    data_postagem: "2023-10-05",
  },
];

const favoritar = (video: Video) => {
  adicionarFavorito(video);
  $toast.success("Adicionado aos favoritos!");
};
</script>

<style scoped></style>
