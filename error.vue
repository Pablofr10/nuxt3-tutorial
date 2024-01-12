<template>
  <div
    class="h-screen w-full flex flex-col justify-center items-center bg-[#c7d6d3]"
  >
    <h1 class="text-8xl font-bold text-green-600">{{ error.statusCode }}</h1>
    <p class="text-2xl font-light text-green-600 my-4">
      {{ error.statusMessage }}
    </p>
    <UButton @click="voltarHome">Ir para a Home</UButton>
  </div>
</template>

<script setup>
defineProps({
  error: {
    default: {
      url: "",
      statusCode: 0,
      statusMessage: "",
      message: "",
      description: "",
      data: {},
    },
  },
});

const voltarHome = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
