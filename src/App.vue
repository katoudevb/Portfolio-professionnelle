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
</style>