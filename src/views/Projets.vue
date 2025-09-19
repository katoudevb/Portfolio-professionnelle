<template>
    <h1>Mes projets</h1>

    <section id="projets">
      <div class="project-cards">
        <!-- Projet 1 -->
        <button class="card btn btn-outline-primary" @click="showModal1 = true">
          CV HTML
        </button>

        <!-- Projet 2 -->
        <button class="card btn btn-outline-primary" @click="showModal2 = true">
          Cahier des charges
        </button>

        <!-- Projet 3 -->
        <button class="card btn btn-outline-primary" @click="showModal3 = true">
          Dynamiser un commentaire
        </button>
      </div>
    </section>

    <!-- Modale CV -->
    <Modal :isOpen="showModal1" @close="showModal1 = false">
      <h2>CV HTML</h2>
      <img :src="cvImage" alt="CV Image" class="modal-image">
      <p>Utilisation des langages HTML et CSS</p>
      <a href="/pdf/CV_Kat.pdf" download class="btn btn-primary">Télécharger mon CV</a>
      <p class="creation-date">Date de création : {{ creationDate1 }}</p>
    </Modal>

    <!-- Modale Cahier des charges -->
    <Modal :isOpen="showModal2" @close="showModal2 = false">
      <h2>Cahier des charges</h2>
      <img :src="cahierDesChargesImage" alt="Cahier des charges" class="modal-image">
      <p>Planification et organisation du projet</p>
      <a href="/pdf/CDC.pdf" download class="btn btn-primary">Télécharger mon Cahier des Charges</a>
      <p class="creation-date">Date de création : {{ creationDate2 }}</p>
    </Modal>

    <!-- Modale Commentaire -->
    <Modal :isOpen="showModal3" @close="showModal3 = false">
      <h2>Dynamiser un commentaire</h2>
      <img :src="commentaireImage" alt="Commentaire Image" class="modal-image">
      <p>Utilisation de HTML et JavaScript pour dynamiser les commentaires</p>
      <a href="/pdf/Commentaire.pdf" download class="btn btn-primary">Télécharger le projet</a>
      <p class="creation-date">Date de création : {{ creationDate3 }}</p>
    </Modal>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

// Images projets
import cvImage from '@/assets/images/cv.png';
import cahierDesChargesImage from '@/assets/images/cdc.png';
import commentaireImage from '@/assets/images/Commentaire.png';

// Contrôle des modales
const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);

// Dates de création
const creationDate1 = '01 Novembre 2024';
const creationDate2 = '05 Janvier 2025';
const creationDate3 = '05 Février 2025';
</script>

<style scoped>
.project-cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.card {
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
}

.modal-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1rem;
}

.creation-date {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}
</style>
