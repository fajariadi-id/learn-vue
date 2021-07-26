<template>
  <div id="movie-container">
    <!-- Movie List -->
    <h1 v-show="loading" class="loading">Loading...</h1>

    <Movie
      v-show="loading ? false : true"
      v-for="movie in getMovies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Movie from '../components/Movie.vue';

export default {
  name: 'MovieList',
  components: {
    Movie,
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(['fetchMovies']),
  },
  computed: mapGetters(['getMovies']),
  created() {
    this.fetchMovies();
  },
  watch: {
    getMovies() {
      if (this.getMovies.length !== 0) this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#movie-container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  justify-content: center;

  .loading {
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 1;
  }
}
</style>
