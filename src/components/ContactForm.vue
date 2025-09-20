<template>
  <section class="container my-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Contactez-moi</h2>

        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" id="name" v-model="form.name" class="form-control" required>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" required>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" v-model="form.message" class="form-control" rows="5" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary w-40">Envoyer</button>
        </form>

        <div v-if="submitted" class="alert alert-success mt-3" role="alert">
          Merci pour votre message !
        </div>
      </div>
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
.card {
  border-radius: 1rem;
}

.btn-primary {
  background-color: #e37ae1ff;
  border-color: #df94deff;
}

.btn-primary:hover {
  background-color: #e4b9e3;
  border-color: #e4b9e3;
}
</style>
