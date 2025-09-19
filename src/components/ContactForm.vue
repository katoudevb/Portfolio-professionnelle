<template>
    <section class="contact-form">
      <h2>Contactez-moi</h2>
  
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
  
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
  
        <div>
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
  
        <button type="submit">Envoyer</button>
      </form>
  
      <div v-if="submitted" class="success-message">
        <p>Merci pour votre message !</p>
      </div>
    </section>
</template>

<script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitted = ref(false);
  
  function handleSubmit() {

    console.log('Formulaire soumis:', form.value);
    
    
    submitted.value = true;
    form.value = { name: '', email: '', message: '' };
  }
</script>

<style scoped>
    .contact-form {
    background-color: #f9f9f9;
    margin-bottom: 1rem;
    padding: 10px;
 
  }
  
  
  .contact-form h2 {
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
  }
  
  .contact-form div {
    margin-bottom: 1rem;
  }
  
  .contact-form label {
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.2rem;
  }
  
  .contact-form button {
    padding: 0.7rem;
    background-color: #a02e9e;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #e4b9e3;
  }
  
  .success-message {
    margin-top: 1rem;
    padding: 0.7rem;
    background-color: #dde588;
    border: 1px solid #dde588;
    border-radius: 4px;
    color: #155724;
  }
</style>
