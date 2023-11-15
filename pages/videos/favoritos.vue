<template>
  <h1>{{ $t("tituloFavoritos") }}</h1>
  <div class="videos">
    <div v-for="video in favoritos" :key="video.id">
      <h2>{{ video.descrição }}</h2>
      <iframe
        width="550"
        height="400"
        :src="video.url"
        title="YouTube video player"
        frameborder="0"
      />

      <div>
        <button @click="removerFavorito(video.id)">Remover Favorito</button>
      </div>
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
