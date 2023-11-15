<template>
  <div>
    Layout Padrão
    <select v-model="locale">
      <option value="pt">pt</option>
      <option value="en">en</option>
    </select>
    <slot></slot>
    Rodapé Padrão
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
