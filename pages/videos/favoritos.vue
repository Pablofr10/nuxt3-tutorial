<template>
  <h1 class="text-4xl text-center mb-4">{{ $t("tituloFavoritos") }}</h1>
  <div>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
    >
      <UCard v-for="video in favoritos" :key="video.id">
        {{ video.descrição }}

        <iframe
          class="h-48 w-full"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
        />
        <UButton @click="removerFavorito(video.id)"> Remover Favorito </UButton>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
// const favoritos = useFavoritos();

const { $toast } = useNuxtApp();

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);

const removerFavorito = (id: number) => {
  videoStore.deletarFavorito(id);
  $toast.success("Vídeo removido dos favoritos com sucesso!");
};
</script>
