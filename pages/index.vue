<template>
  <div class="text-5xl text-center">Página Inicial</div>
  {{ user }}
</template>

<script setup>
const { user } = useUserSession();
const tituloSite = "Pablo Codes - Tutorias";

useHead({
  title: tituloSite,
  meta: [
    {
      name: "description",
      content: "Site de tutorias de VueJS/NuxtJS",
    },
  ],
});
</script>
