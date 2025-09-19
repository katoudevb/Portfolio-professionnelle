<template>
  <footer>
      <div class="footer_social">
        <div class="img">
        <a href="https://www.linkedin.com/in/katiana-bricotteaux-22245a385/details/skills/" target="_blank"><img src="@/assets/images/linkedin.png" alt="Logo Linkedin"></a>
        <a href="https://github.com/katoudevb" target="_blank"><img src="@/assets/images/github.png" alt="Logo GitHub"></a>
        </div>
      </div>
    </footer>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import ContactForm from "./ContactForm.vue";
</script>

<style scoped>
    footer{
        background-color: #fdf5e6;
        padding: 1rem;
        text-align: center;
    }

    footer_social :hover {
          opacity: 50%;
  }
  
  img{
    height: auto;
    width: 30px;
    margin: 1rem;
  }
  
  p{
    margin-bottom: 3rem;
  }
</style>