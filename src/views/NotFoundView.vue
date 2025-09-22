<template>
  <section class="notfound-container container d-flex flex-column justify-content-center align-items-center text-center">
    <h1 class="display-1 fw-bold">404</h1>
    <h2 class="fw-semibold">Oups ! Page non trouvée</h2>
    <p class="text-muted">La page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="btn btn-primary mt-3">Retour à l'accueil</router-link>
  </section>
</template>

<script setup>
</script>

<style scoped>
.notfound-container {
  min-height: 70vh;
  padding: 1rem;
}

/* Styles personnalisés */
h1 {
  font-size: 8rem;
  color: #70151c;
}

/* Responsive */
@media (max-width: 992px) {
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  p {
    font-size: 0.95rem;
  }
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
