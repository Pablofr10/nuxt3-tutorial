<template>
  <div>Vídeos Favoritos</div>
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
        <button @click="videoStore.deletarFavorito(video.id)">
          Remover Favorito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const favoritos = useFavoritos();

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);
</script>
