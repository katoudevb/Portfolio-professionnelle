<template>
  <div id="app" class="d-flex flex-column min-vh-100 ">
    <Header />

  <!-- Contenu principal -->
    <main class="flex-grow-1">
    <RouterView />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Fond parchemin */
.bg-parchemin {
  background: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),
              url('./assets/images/parchemin.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}
</style>