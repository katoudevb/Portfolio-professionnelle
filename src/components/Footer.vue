<template>
  <footer>
    <div class="footer_content container">
      
      <!-- Icônes sociaux -->
      <div class="footer_social">
        <a href="https://www.linkedin.com/in/katiana-bricotteaux-22245a385/details/skills/" target="_blank">
          <img src="@/assets/images/linkedin.png" alt="Logo Linkedin" />
        </a>
        <a href="https://github.com/katoudevb" target="_blank">
          <img src="@/assets/images/github.png" alt="Logo GitHub" />
        </a>
      </div>

      <!-- Feuille décorative + texte -->
      <div class="footer_bottom">
        <img src="@/assets/images/feuille.png" alt="Feuille décorative" class="feuille" />
        <p>© 2025 Tous droits réservés - Katiana Bricotteaux</p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
// Pas de script nécessaire
</script>

<style scoped>
footer {
  background-color: #c75e3eff;
  padding: 1rem 0;
  color: white;
}

/* Conteneur flexible */
.footer_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Icônes sociaux */
.footer_social {
  display: flex;
  align-items: center;
}

.footer_social img {
  width: 30px;
  height: auto;
  margin-right: 1rem;
  transition: opacity 0.3s;
}

.footer_social img:hover {
  opacity: 0.6;
}

/* Partie feuille + texte */
.footer_bottom {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.feuille {
  width: 40px;
  height: auto;
}

/* Responsive mobile / tablette */
@media (max-width: 767px) {
  .footer_content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer_social {
    margin-bottom: 0.5rem;
  }

  .footer_bottom {
    justify-content: center;
  }
}
</style>
