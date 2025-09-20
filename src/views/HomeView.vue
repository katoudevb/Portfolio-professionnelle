<template>
  <h1 class="text-center my-4">Présentation</h1>

  <main class="container">

    <!-- Section Présentation -->
    <section id="presentation" class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Qui suis-je ?</h2>
        <p class="card-text">
          Je m’appelle Katiana BRICOTTEAUX et je suis développeuse web full stack en formation. 
          Je suis passionnée par la création d’interfaces web intuitives et fonctionnelles, et je maîtrise HTML, CSS, JavaScript et bien d'autres. 
          Mon objectif est de participer à des projets web innovants tout en développant mes compétences techniques. 
          En dehors du code, je m’intéresse au design UX/UI et à l’optimisation de l’expérience utilisateur.
        </p>
      </div>
    </section>

    <!-- Section Compétences -->
    <section id="competences" class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Mes compétences techniques</h2>

        <div id="front-end" class="mb-3">
          <h3>Front-end & Frameworks</h3>
          <ul>
            <li>HTML5, CSS3, Sass</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>VueJS</li>
            <li>Bootstrap</li>
            <li>Responsive Design, UI/UX Design</li>
          </ul>
        </div>

        <div id="back-end" class="mb-3">
          <h3>Back-end & Frameworks</h3>
          <ul>
            <li>Node.js</li>
            <li>Django</li>
            <li>Symfony 7</li>
            <li>PHP</li>
            <li>Python</li>
            <li>API REST</li>
            <li>Gestion de bases de données (MongoDB, MySQL)</li>
          </ul>
        </div>

        <div id="outils" class="mb-3">
          <h3>Outils & Méthodes</h3>
          <ul>
            <li>Git & GitHub, npm</li>
            <li>Visual Studio Code</li>
            <li>Py Charm</li>
            <li>Testing & Debugging</li>
          </ul>
        </div>

        <div id="design" class="mb-3">
          <h3>Design & créativité</h3>
          <ul>
            <li>Figma</li>
            <li>Prototypage</li>
            <li>Maquettage (zoning, wireframe)</li>
          </ul>
        </div>

        <div id="quality">
          <h3>Qualités professionnelles</h3>
          <ul>
            <li>Organisée</li>
            <li>Attentive</li>
            <li>Polyvalente</li>
            <li>Autonome</li>
            <li>Responsable</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- Section Objectifs -->
    <section id="objectifs" class="card mb-4 shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Mes objectifs</h2>
        <p class="card-text">
          Je souhaite me spécialiser dans la cybersécurité, car la protection des données personnelles est un enjeu majeur dans notre monde numérique. 
          Je veux combiner mes compétences techniques avec des solutions sécurisées, afin de garantir la confidentialité et la fiabilité des systèmes. 
          Mon objectif est de contribuer à des projets qui protègent les utilisateurs tout en continuant à développer mes compétences en sécurité et en développement full stack.
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
h1 {
  margin-top: 3rem;
}

h2 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.card {
  border-radius: 1rem;
}

.card-title {
  margin-bottom: 1rem;
}
</style>
