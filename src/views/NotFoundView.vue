<template>
  <section class="notfound-container text-center">
    <h1 class="display-1">404</h1>
    <h2>Oups ! Page non trouvée</h2>
    <p>La page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="btn btn-primary mt-3">Retour à l'accueil</router-link>
  </section>
</template>

<script setup>
</script>

<style scoped>
.notfound-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
}

h1 {
  font-size: 8rem;
  color: #70151c;
}

h2 {
  font-size: 2rem;
  margin-top: 1rem;
}

p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #555;
}

.btn-primary {
  background-color: #70151c;
  border-color: #70151c;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-primary:hover {
  background-color: #70151d98;
  border-color: #70151d98;
}
</style>
