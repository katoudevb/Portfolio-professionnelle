<template>
  <section id="projets" class="container my-4">
    <h1 class="text-center mb-4">Mes projets</h1>

    <div class="row g-3">
      <div class="col-md-4" v-for="projet in projets" :key="projet.id">
        <div class="card h-100 text-center">
          <img :src="projet.img" class="card-img-top" :alt="projet.title" style="height:180px; object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">{{ projet.title }}</h5>
            <p class="card-text">{{ projet.desc }}</p>
            <!-- Bouton Voir -->
            <button class="btn btn-rose btn-sm" @click="openModal(projet.id)">Voir</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modales dynamiques -->
  <Modal v-for="projet in projets" :key="projet.id" :isOpen="activeModal === projet.id" @close="closeModal">
    <div class="modal-content card p-3">
      <h2>{{ projet.title }}</h2>
      <img :src="projet.img" alt="Image projet" class="modal-image">
      <p>{{ projet.desc }}</p>

      <!-- Affiche les images supplémentaires si elles existent -->
      <div v-if="projet.extraImgs?.length">
        <div v-for="(img, index) in projet.extraImgs" :key="index" class="mb-2">
          <img :src="img" class="modal-image">
        </div>
      </div>

      <a :href="projet.pdf" download class="btn btn-rose btn-sm mb-2">Télécharger le projet</a>
      <button class="btn btn-secondary btn-sm" @click="closeModal">Retour aux projets</button>
      <p class="creation-date">Date de création : {{ projet.date }}</p>
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

// Liste des projets
interface Projet {
  id: number;
  title: string;
  img: string;
  desc: string;
  pdf: string;
  date: string;
  extraImgs?: string[];
}

const projets: Projet[] = [
  { id: 1, title: 'CV HTML', img: cvImage, desc: 'Projet réalisé avec le langages HTML et CSS', pdf: '/pdf/CV_Kat.pdf', date: '01 Novembre 2024' },
  { id: 2, title: 'Cahier des charges', img: cahierDesChargesImage, desc: 'Planification et organisation d\'un projet', pdf: '/pdf/CDC.pdf', date: '05 Janvier 2025' },
  { id: 3, title: 'Dynamiser un commentaire', img: commentaireImage, desc: 'HTML et JavaScript pour dynamiser les commentaires', pdf: '/pdf/Commentaire.pdf', date: '05 Février 2025' },
  { id: 4, title: 'Maquette Probeat', img: DesktopImage, desc: 'Maquette mobile et desktop pour le site Probeat', pdf: 'assets/fig/Probeat.fig', date: '06 Avril 2025', extraImgs: [MobileImage, PrototypeDesktopImage, PrototypeMobileImage] }
];

// Référence pour la modale active
const activeModal = ref<number | null>(null);

function openModal(id: number) {
  activeModal.value = id;
}

function closeModal() {
  activeModal.value = null;
}
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

.card-img-top {
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.modal-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.modal-content {
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  margin: 60px auto;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 1rem;
  background-color: white;
}

.creation-date {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

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
