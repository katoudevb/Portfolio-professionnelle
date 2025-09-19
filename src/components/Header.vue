<script setup lang="ts">

</script>

<template>
  <header class="d-flex align-items-center justify-content-between p-3 navbar-creme w-100">
    <!-- Logo à gauche -->
    <div class="d-flex align-items-center">
      <img 
        src="@/assets/identite.png" 
        alt="Photo d'identité" 
        class="me-3 rounded-circle"
        width="100" 
        height="100"
      />
      <h1 class="h4 m-0">Katiana BRICOTTEAUX</h1>
    </div>

    <!-- Navigation à droite -->
    <nav>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link px-3">Accueil</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/projets" class="nav-link px-3">Projets</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link px-3">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- Contenu principal de la page -->
  <main class="p-3">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar-creme {
  background-color: #fdf5e6;
  width: 100%;
  top: 0;
  left: 0;
  /* position sticky pour reste visible */
  position: sticky;
  z-index: 1000;
}

/* S'assurer que le body n'impose pas de centrage vertical */
body {
  margin: 0;
  padding: 0;
}
</style>

