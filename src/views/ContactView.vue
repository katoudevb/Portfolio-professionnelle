<template>
  <main class="container my-4">
    <h1 class="text-center mb-4">Contact</h1>
    <ContactForm />
  </main>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>
h1 {
  color: #d52409ff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 2rem;
}

main {
  min-height: 60vh; /* pour que le contenu prenne un minimum d'espace vertical */
}
</style>
