<template>
  <header class="navbar-brown sticky-top p-3">
    <div class="container d-flex align-items-center justify-content-between flex-wrap">
      
      <!-- Logo -->
      <RouterLink to="/" class="d-flex align-items-center text-decoration-none mb-2 mb-lg-0">
        <img src="@/assets/identite.png" alt="Photo d'identité" class="rounded-circle me-2" width="70" height="70">
        <h1 class="h4 m-0 text-white">Katiana BRICOTTEAUX</h1>
      </RouterLink>

      <!-- Menu burger -->
      <button class="navbar-toggler d-lg-none" type="button" @click="toggleMenu">
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
      </button>

      <!-- Navigation -->
      <nav :class="['nav d-lg-flex', showMenu ? 'show-mobile' : '']">
        <RouterLink to="/" class="nav-link px-3 py-1 text-white" @click="closeMenu">Accueil</RouterLink>
        <RouterLink to="/projets" class="nav-link px-3 py-1 text-white" @click="closeMenu">Projets</RouterLink>
        <RouterLink to="/contact" class="nav-link px-3 py-1 text-white" @click="closeMenu">Contact</RouterLink>
      </nav>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function closeMenu() {
  showMenu.value = false;
}
</script>

<style scoped>
.navbar-brown {
  background-color: #c75e3eff;
  z-index: 1000;
}

/* Liens de nav */
.nav-link {
  transition: all 0.3s;
}
.nav-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* Menu burger */
.navbar-toggler {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.navbar-toggler span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.4s ease;
}

/* Animation du X */
.navbar-toggler span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.navbar-toggler span.open:nth-child(2) {
  opacity: 0;
}
.navbar-toggler span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Nav mobile */
.nav {
  transition: all 0.3s ease;
}

@media (max-width: 991px) {
  .nav {
    display: flex;
    flex-direction: column;
    background-color: #c75e3eff;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    max-height: 0;
    overflow: hidden;
  }

  .nav.show-mobile {
    max-height: 300px; /* ajuste selon le nombre de liens */
  }

  .nav-link {
    padding: 10px;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.2);
  }
}
</style>
