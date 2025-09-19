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
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  defineProps({
    isOpen: Boolean,
    imageSrc: String, 
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
  }
  
  /* Contenu de la modale */
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
    text-align: center;
    position: relative;
  }
  

  .modal-image {
    width: 100%; 
    max-width: 500px; 
    height: auto; 
    margin-bottom: 20px;
  }
  

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
  }
  
  .close-btn:hover {
    color: #f00;
  }
  

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>