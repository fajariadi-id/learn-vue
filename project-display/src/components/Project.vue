<template>
  <div class="project">
    <img :src="project.img" alt="" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>

    <a :href="project.web" target="_blank">web</a>
    <a :href="project.repo" target="_blank">repo</a>
  </div>
</template>

<script>
// import {} from '../assets/scss/_variables.scss';

export default {
  name: 'Project',
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.project {
  width: 100%;
  max-width: 400px;
  margin: 10px;
  background-color: red;
  box-shadow: $shadow;
  border-radius: 10px;
  overflow: hidden;
}
</style>
