<template>
  <section class="container my-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Contactez-moi</h2>

        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" id="name" v-model="form.name" class="form-control" placeholder="Votre nom" required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" placeholder="Votre email" required>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" v-model="form.message" class="form-control" rows="5" placeholder="Votre message" required></textarea>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary px-4">Envoyer</button>
          </div>
        </form>

        <div v-if="submitted" class="alert alert-success mt-3 text-center" role="alert">
          Merci pour votre message !
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitted = ref(false);

// ⚠️ Remplace ces valeurs par tes identifiants EmailJS
const SERVICE_ID = 'service_nug02wt';
const TEMPLATE_ID = 'template_nt0lc69';
const PUBLIC_KEY = 'vyP0AI_5mW5LIidxR';

async function handleSubmit() {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      },
      PUBLIC_KEY
    );

    submitted.value = true;
    form.value = { name: '', email: '', message: '' };

  } catch (error) {
    console.error('Erreur EmailJS :', error);
    alert('Une erreur est survenue lors de l\'envoi du message.');
  }
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
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

/* Responsive : centrer le formulaire sur petits écrans */
@media (max-width: 576px) {
  form {
    text-align: center;
  }

  .form-control {
    margin-bottom: 1rem;
  }
}
</style>
