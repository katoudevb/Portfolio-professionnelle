<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-content">
          <button class="close-btn" @click="close">&times;</button>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  imageSrc: String, // tu peux l'utiliser dans le slot si besoin
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050; /* priorité sur le reste du contenu */
}

/* Contenu de la modale */
.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  text-align: center;
  position: relative;
}

/* Image responsive si tu l'utilises dans le slot */
.modal-image {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.close-btn:hover {
  color: #d52409ff; /* cohérence avec la couleur principale */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
