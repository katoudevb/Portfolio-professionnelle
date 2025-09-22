<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Header fixe en haut si besoin -->
    <Header />

    <!-- Contenu principal -->
    <main >
      <RouterView />
    </main>
    
    <!-- Footer en bas -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global reset pour les images responsives dans tout le site */
img {
  max-width: 100%;
  height: auto;
}

/* Optionnel : s'assurer que les sections principales prennent toute la largeur */
main {
  width: 100%;
}
</style>
