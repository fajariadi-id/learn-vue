<template>
  <div class="container">
    <h1 class="heading">
      mini projects - vue.js
    </h1>

    <small>hover to see details</small>

    <div class="projects-container">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>

  <footer>
    <p>&copy; Vue.js Learning - Fajar Riadi</p>
  </footer>
</template>

<script>
import Project from './components/Project.vue';

import projectData from './assets/data/project-data.js';

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.projects = projectData;
  },
};
</script>

<style lang="scss">
@import './assets/scss/_variables.scss';

/* GLOBAL */
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $ff-primary;
  background-color: $clr-white;
  color: $clr-black;
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: inherit;
  color: inherit;
}

img {
  display: block;
  width: 100%;
}

h1,
h2,
h3,
h4 {
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
}

footer {
  text-align: center;
  margin-top: 2rem;

  @media (max-width: 576px) {
    & > p {
      margin-bottom: 10px;
    }
  }
}

.container {
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  @media (max-width: 900px) {
    min-height: unset;
    width: 95vw;
  }

  small {
    display: block;
    margin: 3rem 0 20px;
    font-size: 14px;
    opacity: 0.3;
    text-align: center;

    @media (max-width: 900px) {
      margin: 2rem 0 10px;
    }

    @media (max-width: 900px) {
      margin: 1rem 0 0;
    }
  }

  .projects-container {
    /* margin-top: 5rem; */
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-gap: 0.3rem;
    }
  }
}

/* CUSTOM */
.heading {
  font-weight: $fw-bold;
  text-align: center;
  color: #dedede;
  font-size: 68px;
  margin-top: 5rem;

  @media (max-width: 900px) {
    font-size: 48px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
}
</style>
