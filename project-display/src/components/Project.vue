<template>
  <div class="project">
    <!-- <img src="../assets/images/vuex-todo-manager.png" alt="" /> -->
    <h3>{{ project.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  box-shadow: 0 10px 15px rgba($color: #000000, $alpha: 0.1);
}
</style>
