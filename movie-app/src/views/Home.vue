<template>
  <div class="home">
    <div id="main-section">
      <Sidebar />
      <MovieList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import MovieList from '../components/MovieList.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MovieList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  #main-section {
    display: flex;
    margin-top: 50px;
  }

  @media (max-width: 900px) {
    & > #main-section {
      flex-direction: column;
    }
  }
}
</style>
