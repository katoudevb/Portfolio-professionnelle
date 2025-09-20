<template>
  <section id="projets" class="container my-4">
    <h1 class="text-center mb-4">Mes projets</h1>

    <div class="row g-3">
      <!-- Projet CV -->
      <div class="col-md-4">
        <div class="card h-100 text-center" @click="showModal1 = true" style="cursor:pointer;">
          <img :src="cvImage" class="card-img-top" alt="CV HTML" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">CV HTML</h5>
            <p class="card-text">Projet réalisé avec le langages HTML et CSS</p>
          </div>
        </div>
      </div>

      <!-- Projet Cahier des charges -->
      <div class="col-md-4">
        <div class="card h-100 text-center" @click="showModal2 = true" style="cursor:pointer;">
          <img :src="cahierDesChargesImage" class="card-img-top" alt="Cahier des charges" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">Cahier des charges</h5>
            <p class="card-text">Planification et organisation d'un projet</p>
          </div>
        </div>
      </div>

      <!-- Projet Dynamiser un commentaire -->
      <div class="col-md-4">
        <div class="card h-100 text-center" @click="showModal3 = true" style="cursor:pointer;">
          <img :src="commentaireImage" class="card-img-top" alt="Dynamiser un commentaire" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">Dynamiser un commentaire</h5>
            <p class="card-text">HTML et JavaScript pour dynamiser les commentaires</p>
          </div>
        </div>
      </div>

        <!-- Projet Maquette -->
      <div class="col-md-4">
        <div class="card h-100 text-center" @click="showModal4 = true" style="cursor:pointer;">
          <img :src="DesktopImage" class="card-img-top" alt="Maquette desktop" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">Maquette Probeat</h5>
            <p class="card-text">Maquette mobile et desktop pour le site Probeat vente de multimédia (enceinte, casques, ..)</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modale CV -->
  <Modal :isOpen="showModal1" @close="showModal1 = false">
    <div class="modal-content card p-3">
      <h2>CV HTML</h2>
      <img :src="cvImage" alt="CV Image" class="modal-image">
      <p>Utilisation des langages HTML et CSS</p>
      <a href="/pdf/CV_Kat.pdf" download class="btn btn-rose btn-sm mb-2">Télécharger mon CV</a>
      <button class="btn btn-secondary btn-sm" @click="showModal1 = false">Retour aux projets</button>
      <p class="creation-date">Date de création : {{ creationDate1 }}</p>
    </div>
  </Modal>

  <!-- Modale Cahier des charges -->
  <Modal :isOpen="showModal2" @close="showModal2 = false">
    <div class="modal-content card p-3">
      <h2>Cahier des charges</h2>
      <img :src="cahierDesChargesImage" alt="Cahier des charges" class="modal-image">
      <p>Planification et organisation du projet</p>
      <a href="/pdf/CDC.pdf" download class="btn btn-rose btn-sm mb-2">Télécharger mon Cahier des Charges</a>
      <button class="btn btn-secondary btn-sm" @click="showModal2 = false">Retour aux projets</button>
      <p class="creation-date">Date de création : {{ creationDate2 }}</p>
    </div>
  </Modal>

  <!-- Modale Commentaire -->
  <Modal :isOpen="showModal3" @close="showModal3 = false">
    <div class="modal-content card p-3">
      <h2>Dynamiser un commentaire</h2>
      <img :src="commentaireImage" alt="Commentaire Image" class="modal-image">
      <p>Utilisation de HTML et JavaScript pour dynamiser les commentaires</p>
      <a href="/pdf/Commentaire.pdf" download class="btn btn-rose btn-sm mb-2">Télécharger le projet</a>
      <button class="btn btn-secondary btn-sm" @click="showModal3 = false">Retour aux projets</button>
      <p class="creation-date">Date de création : {{ creationDate3 }}</p>
    </div>
  </Modal>

<!-- Modale Maquette -->
<Modal :isOpen="showModal4" @close="showModal4 = false">
  <div class="modal-content card p-3">
    <h2>Maquette Probeat</h2>

    <div class="row">
      <div class="col-md-6">
        <img :src="DesktopImage" alt="Maquette Desktop" class="modal-image">
        <p class="text-center">Version Desktop</p>
      </div>
      <div class="col-md-6">
        <img :src="MobileImage" alt="Maquette Mobile" class="modal-image">
        <p class="text-center">Version Mobile</p>
      </div>
      <div class="col-md-6">
        <img :src="PrototypeDesktopImage" alt="Prototype Desktop" class="modal-image">
        <p class="text-center">Version Prototype Desktop</p>
      </div>
      <div class="col-md-6">
        <img :src="PrototypeMobileImage" alt="Prototype Mobile" class="modal-image">
        <p class="text-center">Version Prototype Mobile</p>
      </div>
    </div>

    <p>Utilisation de Figma pour créer les maquettes et le prototype</p>
    <a href="assets/fig/Probeat.fig" download class="btn btn-rose btn-sm mb-2">Télécharger le projet</a>
    <button class="btn btn-secondary btn-sm" @click="showModal4 = false">Retour aux projets</button>
    <p class="creation-date">Date de création : {{ creationDate4 }}</p>
  </div>
</Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

// Images projets
import cvImage from '@/assets/images/cv.png';
import cahierDesChargesImage from '@/assets/images/cdc.png';
import commentaireImage from '@/assets/images/Commentaire.png';
import DesktopImage from '@/assets/images/Desktop.png';
import MobileImage from '@/assets/images/Mobile.png';
import PrototypeDesktopImage from '@/assets/images/PrototypeDesktop.png';
import PrototypeMobileImage from '@/assets/images/PrototypeMobile.png';

// Contrôle des modales
const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
const showModal4 = ref(false);

// Dates de création
const creationDate1 = '01 Novembre 2024';
const creationDate2 = '05 Janvier 2025';
const creationDate3 = '05 Février 2025';
const creationDate4 = '06 Avril 2025';
</script>

<style scoped>
.card {
  border-radius: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(211, 132, 189, 1);
}

/* Pour les images des cards projets */
.card-img-top {
  height: 120px;          /* hauteur réduite */
  object-fit: cover;      /* conserve proportions et coupe légèrement si nécessaire */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.modal-image {
  width: 100%;                /* image s’adapte à la modale */
  max-height: 300px;          /* hauteur max pour limiter l’espace */
  object-fit: contain;        /* conserve les proportions */
  margin-bottom: 1rem;
}

.modal-content {
  max-width: 500px;           /* largeur max */
  width: 90%;                 /* responsive */
  max-height: 80vh;           /* hauteur max = 80% de la fenêtre */
  margin: 60px auto;          /* marge au-dessus et au-dessous */
  padding: 1rem;
  overflow-y: auto;           /* scroll si contenu dépasse */
  border-radius: 1rem;
  background-color: white;
}

.creation-date {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}


/* Bouton rose réutilisable */
.btn-rose {
  background-color: rgba(211, 132, 189, 1);
  color: #fff;
  border: none;
}
.btn-rose:hover {
  background-color: rgba(211, 132, 189, 1);
  color: #fff;
}
</style>
