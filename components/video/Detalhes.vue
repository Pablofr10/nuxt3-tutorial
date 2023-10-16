<script setup lang="ts">
const { diferencaEmDias, diasPassados } = useUtils();

const dataVideo = new Date(2023, 9, 2);
diasPassados(dataVideo);

</script>

<template>
  <h1>Componentes - Nuxt 3</h1>
  <p>Autor: Pablo Codes</p>
  <p>{{ diferencaEmDias }} dias atrás</p>
</template>

