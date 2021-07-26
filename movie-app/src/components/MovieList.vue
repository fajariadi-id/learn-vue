<template>
  <div id="movie-container">
    <!-- Movie List -->

    <Movie v-for="movie in getMovies" :key="movie.id" :movie="movie" />
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
  // data() {
  //   return {
  //     movies: [],
  //   };
  // },
  methods: {
    // ...mapActions(['fetchMovies']),
  },
  computed: mapGetters(['getMovies']),
  created() {
    // this.fetchMovies;
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
}
</style>
