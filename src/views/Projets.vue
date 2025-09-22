<template>
  <section id="projets" class="container my-4">
    <h1 class="text-center mb-4">Mes projets</h1>

    <!-- Section ecoles -->
    <h2 class="mb-3">Écoles</h2>
    <div class="row g-3 mb-5">
      <div class="col-12 col-sm-6 col-md-4" v-for="projet in projets.filter(p => p.category === 'Ecole')" :key="projet.id">
        <div class="card h-100 text-center">
          <img :src="projet.img" class="card-img-top img-fluid" :alt="projet.title" style="object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">{{ projet.title }}</h5>
            <p class="card-text">{{ projet.desc }}</p>
            <button class="btn btn-brown btn-sm w-100 w-md-auto" @click="openModal(projet.id)">Voir</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Personnels -->
    <h2 class="mb-3">Personnels</h2>
    <div class="row g-3">
      <div class="col-12 col-sm-6 col-md-4" v-for="projet in projets.filter(p => p.category === 'Personnels')" :key="projet.id">
        <div class="card h-100 text-center">
          <img :src="projet.img" class="card-img-top img-fluid" :alt="projet.title" style="object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">{{ projet.title }}</h5>
            <p class="card-text">{{ projet.desc }}</p>
            <button class="btn btn-brown btn-sm w-100 w-md-auto" @click="openModal(projet.id)">Voir</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Clients -->
    <h2 class="mb-3">Clients</h2>
    <div class="row g-3">
      <div class="col-12 col-sm-6 col-md-4" v-for="projet in projets.filter(p => p.category === 'Client')" :key="projet.id">
        <div class="card h-100 text-center">
          <img :src="projet.img" class="card-img-top img-fluid" :alt="projet.title" style="object-fit:cover;">
          <div class="card-body">
            <h5 class="card-title">{{ projet.title }}</h5>
            <p class="card-text">{{ projet.desc }}</p>
            <button class="btn btn-brown btn-sm w-100 w-md-auto" @click="openModal(projet.id)">Voir</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modales dynamiques -->
  <Modal v-for="projet in projets" :key="projet.id" :isOpen="activeModal === projet.id" @close="closeModal">
    <div class="modal-content card p-3">
      <h2>{{ projet.title }}</h2>
      <img :src="projet.img" alt="Image projet" class="modal-image img-fluid">
      <p>{{ projet.desc }}</p>

      <!-- Affiche les images supplémentaires si elles existent -->
      <div v-if="projet.extraImgs?.length">
        <div v-for="(img, index) in projet.extraImgs" :key="index" class="mb-2">
          <img :src="img" class="modal-image img-fluid">
        </div>
      </div>

      <!-- PDF seulement si défini -->
      <a v-if="projet.pdf" :href="projet.pdf" download class="btn btn-brown btn-sm mb-2 w-100 w-md-auto">
        Télécharger le projet
      </a>

      <!-- GitHub seulement si défini -->
      <button v-if="projet.github" class="btn btn-brown btn-sm mb-2 w-100 w-md-auto" @click="openGithub(projet.github)">
        Voir sur GitHub
      </button>

      <button class="btn btn-secondary btn-sm w-100 w-md-auto" @click="closeModal">Retour aux projets</button>
      <p class="creation-date">Date de création : {{ projet.date }}</p>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

// Images import
import cvImage from '@/assets/images/cv.png';
import cahierDesChargesImage from '@/assets/images/cdc.png';
import commentaireImage from '@/assets/images/Commentaire.png';
import DesktopImage from '@/assets/images/Desktop.png';
import MobileImage from '@/assets/images/Mobile.png';
import PrototypeDesktopImage from '@/assets/images/PrototypeDesktop.png';
import PrototypeMobileImage from '@/assets/images/PrototypeMobile.png';
import PortfolioCEFImage from '@/assets/images/PortfolioCEF.png';
import CvCEFImage from '@/assets/images/cvCEF.png';
import PlantesImage from '@/assets/images/Plantes.png';
import AsterixImage from '@/assets/images/Asterix.png';
import TifosiImage from '@/assets/images/Tifosi.png';
import BibliothequeImage from '@/assets/images/Bibliotheque.png';
import ApiRestImage from '@/assets/images/ApiRest.png';
import StubbornImage from '@/assets/images/Stubborn.png';
import ArtisanImage from '@/assets/images/Artisan.png';
import KnowledgeImage from '@/assets/images/Knowledge.png';

interface Projet {
  id: number;
  title: string;
  img: string;
  desc: string;
  pdf?: string;
  github?: string;
  date: string;
  category: "Ecole" | "Client" | "Personnels";
  extraImgs?: string[];
}

const projets: Projet[] = [
  { id: 1, title: "CV HTML", img: cvImage, desc: "Projet réalisé avec le langage HTML et CSS", github: "https://github.com/katoudevb/Cv_CEF", date: "01 Novembre 2024", category: "Ecole" },
  { id: 2, title: "Cahier des charges", img: cahierDesChargesImage, desc: "Planification et organisation d'un projet", pdf: "/pdf/CDC.pdf", date: "05 Janvier 2025", category: "Ecole" },
  { id: 3, title: "Dynamiser un commentaire", img: commentaireImage, desc: "HTML et JavaScript pour dynamiser les commentaires", github: "https://github.com/katoudevb/Dynamiser_commentaire", date: "05 Février 2025", category: "Ecole" },
  { id: 4, title: "Maquette Probeat", img: DesktopImage, desc: "Maquette mobile et desktop pour le site Probeat", github: "https://github.com/tonUser/probeat-maquette", pdf: "assets/fig/Probeat.fig", date: "06 Avril 2025", extraImgs: [MobileImage, PrototypeDesktopImage, PrototypeMobileImage], category: "Ecole" },
  { id: 5, title: "Portfolio", img: PortfolioCEFImage, desc: "Portfolio d'un devoir CEF avec utilisation de modals", github: "https://github.com/katoudevb/portfolio_cef", date: "18 Mars 2025", category: "Ecole" },
  { id: 6, title: "Cv avec React.JS", img: CvCEFImage, desc: "Projet réalisé avec React.JS et hébergé sur CodeSandbox, utilisation de barre de progression Bootstrap et d'un menu burger pour les écrans de taille tablettes et smartphones.", github: "https://github.com/katoudevb/cv-react", date: "02 Mai 2025", category: "Ecole" },
  { id: 7, title: "Site vitrine pour La vie des plantes", img: PlantesImage, desc: "Projet réalisé avec WordPress", github: "https://github.com/katoudevb/lavie-desplantes", date: "06 Mai 2025", category: "Ecole" },
  { id: 8, title: "Dynamiser un site web avec Angular", img: AsterixImage, desc: "Créer un site web sur les ventes de figurines Astérix et Obélix.", github: "https://github.com/katoudevb/angular-app", date: "13 Mai 2025", category: "Ecole" },
  { id: 9, title: "Concevoir une base de données avec MySQL", img: TifosiImage, desc: "Création d'une base de données pour le site web de ventes de pizza Tifosi", github: "https://github.com/katoudevb/tifosi", date: "22 Mai 2025", category: "Ecole" },
  { id: 10, title: "Créer la plateforme hébergé 'Trouve ton Artisan' avec Angular", img: ArtisanImage, desc: "Creation d'une plateforme en ligne pour facilité la mise en relation entre particuliers et artisans", github: "https://github.com/katoudevb/TrouveTonArtisan", date: "30 Juin 2025", category: "Ecole" },
  { id: 11, title: "Applications programmées en programmation orientée objet avec Python", img: BibliothequeImage, desc: "Création d’une application de gestion de bibliothèque et d’une application membre en POO avec Django", github: "https://github.com/katoudevb/projet_django", date: "04 Juillet 2025", category: "Ecole" },
  { id: 12, title: "Application de gestion d’un port de plaisance avec une API REST", img: ApiRestImage, desc: "Création d’une application de gestion du port Russell avec Node.js", github: "https://github.com/katoudevb/port-russell-api", date: "15 Juillet 2025", category: "Ecole" },
  { id: 13, title: "Créer une application e-commerce avec Symfony 7", img: StubbornImage, desc: "Boutique en ligne de vente de sweat-shirts", github: "https://github.com/katoudevb/stubborn_shop", date: "09 Août 2025", category: "Ecole" },
  { id: 14, title: "Créer une plateforme e-learning avec Symfony 7", img: KnowledgeImage, desc: "Creation d'une plateforme en ligne spécialisé dans l'édition de supports de formation à distance", github: "https://github.com/katoudevb/knowledge", date: "02 Septembre 2025", category: "Ecole" },
];

const activeModal = ref<number | null>(null);

function openModal(id: number) {
  activeModal.value = id;
}

function closeModal() {
  activeModal.value = null;
}

function openGithub(url: string) {
  window.open(url, "_blank");
}
</script>

<style scoped>
h1, h2, h5 {
  color: #d52409ff;
}

.card {
  border-radius: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px #70151c;
}

.card-img-top {
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

@media (max-width: 576px) {
  .modal-content {
    width: 95%;
    max-height: 90vh;
    padding: 0.5rem;
  }
}

.creation-date {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.btn-brown {
  background-color: #70151c;
  color: #fff;
  border: none;
}
.btn-brown:hover {
  background-color: #70151c;
  color: #fff;
}

.btn-secondary {
}
</style>
