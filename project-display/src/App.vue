<template>
  <div class="container">
    <h1 class="heading">
      mini projects - vue.js
    </h1>

    <div class="projects-container">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
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

.container {
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  .projects-container {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
  }
}

/* CUSTOM */
.heading {
  font-weight: $fw-bold;
  text-align: center;
  color: #dedede;
  font-size: 68px;
  margin-top: 5rem;
}
</style>
