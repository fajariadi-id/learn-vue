// import movieList from '../../assets/movie-list';
import moviesAPI from '../../services/moviesAPI';

// custom function ---
const compare = ({ sortBy, order }) => {
  return (a, b) => {
    if (sortBy === 'rating' && order === 'desc') return b.rating - a.rating;
    if (sortBy === 'rating' && order === 'asc') return a.rating - b.rating;
    if (sortBy === 'year' && order === 'desc') return b.year - a.year;
    if (sortBy === 'year' && order === 'asc') return a.year - b.year;
  };
};
// custom function end ---

const state = {
  movies: [],
  search: '',
  filter: { sortBy: 'year', order: 'desc' },
};

const getters = {
  getMovies: (state) => {
    return state.movies
      .filter((movie) =>
        movie.name.toLowerCase().includes(state.search.toLowerCase())
      )
      .sort(compare(state.filter));
  },

  getMovie: (state) => (id) => {
    return state.movies.find((movie) => movie.id === id);
  },
};

const actions = {
  async fetchMovies({ commit }) {
    try {
      const res = await moviesAPI.getMovies();
      commit('setMovies', res);
    } catch (error) {
      console.log(error);
    }
  },

  searchMovies({ commit }, search) {
    commit('setSearch', search);
  },

  sortMovies({ commit }, filter) {
    commit('setFilter', filter);
    // console.log(this.filter);
  },

  async addMovie({ commit }, movie) {
    try {
      const res = await moviesAPI.addMovie(movie);
      commit('addMovie', res);
    } catch (error) {
      console.log(error);
    }

    // movie.id = state.movies.length++;
  },

  async deleteMovie({ commit }, id) {
    try {
      const res = await moviesAPI.deleteMovie(id);
      commit('removeMovie', res);
    } catch (error) {
      console.log(error);
    }
  },

  async updateMovie({ commit }, movie) {
    try {
      const res = await moviesAPI.updateMovie(movie);
      commit('onUpdate', res);
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  addMovie: (state, movie) => state.movies.push(movie),
  setSearch: (state, search) => (state.search = search),
  setFilter: (state, filter) => (state.filter = filter),
  removeMovie: (state, id) =>
    (state.movies = state.movies.filter((movie) => movie.id !== id)),
  onUpdate: (state, movie) =>
    (state.movies = state.movies.map((prevMovie) => {
      if (prevMovie.id === movie.id) return movie;
      return prevMovie;
    })),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
