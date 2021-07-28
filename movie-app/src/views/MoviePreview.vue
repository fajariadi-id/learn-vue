<template>
  <div id="movie-preview">
    <h1 v-show="loading" class="loading">Loading...</h1>

    <div v-show="loading ? false : true" id="movie-container">
      <div id="movie-poster">
        <img :src="movie.poster" alt="poster" />
      </div>

      <div id="movie-info">
        <div>
          <h1>{{ movie.name }}</h1>
          <h3>{{ movie.year }}</h3>
          <h3>{{ movie.genre }}</h3>

          <h3>
            <span
              id="movie-rating"
              :style="{ 'background-color': getRatingColor() }"
              >{{ movie.rating }}</span
            >
          </h3>

          <h3>Budget: {{ movie.budget }}</h3>
          <h3>Box Office: {{ movie.boxOffice }}</h3>

          <h3>
            Actors:
            <span v-for="(actor, idx) in movie.actors" :key="idx">{{
              actor.name
            }}</span>
          </h3>

          <h3><strong>Storyline: </strong> {{ movie.storyline }}</h3>
        </div>

        <div id="options">
          <button class="edit" @click="showModal = true">Edit</button>
          <button class="delete" @click="removeMovie(movie.id)">Delete</button>
        </div>
      </div>

      <Modal v-if="showModal" @close="showModal = false">
        <template v-slot:header>
          <h3 class="m-0">Update movie</h3>
        </template>

        <template v-slot:body>
          <form @submit="onUpdate" ref="movieForm" id="movie-form">
            <p>Fill out the details bellow</p>
            <input
              required
              v-model="movie.name"
              type="text"
              placeholder="Name"
            />

            <input
              required
              v-model="movie.year"
              type="number"
              placeholder="Year"
            />

            <input
              required
              v-model="movie.rating"
              type="number"
              placeholder="Rating"
            />

            <input
              required
              v-model="movie.budget"
              type="text"
              placeholder="Budget"
            />

            <input
              required
              v-model="movie.poster"
              type="text"
              placeholder="Poster"
            />

            <input
              required
              v-model="movie.boxOffice"
              type="text"
              placeholder="Box Office"
            />

            <hr />

            <div>
              <div id="actor-input">
                <p class="m-0">Actors</p>
                <span @click="addActor" class="add-actor">+</span>
              </div>

              <input
                required
                v-for="(actor, index) in movie.actors"
                :key="index"
                v-model="movie.actors[index].name"
                type="text"
                placeholder="Actor"
              />
            </div>

            <hr />

            <textarea
              required
              v-model="movie.storyline"
              placeholder="Storyline"
              rows="6"
            />
          </form>
        </template>

        <template v-slot:footer>
          <button id="update-movie" @click="$refs.movieForm.requestSubmit()">
            Save
          </button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Modal from '../components/Modal.vue';
import ratingMixin from '../mixins/ratingMixin';
import moviesAPI from '../services/moviesAPI';

export default {
  name: 'MoviePreview',
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      movie: {},
      loading: true,
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: null,
    },
  },
  methods: {
    ...mapActions(['deleteMovie', 'updateMovie']),
    removeMovie(id) {
      this.deleteMovie(id);
      this.$router.push('/');
    },
    onUpdate(e) {
      e.preventDefault();

      this.updateMovie(this.movie);

      this.showModal = false;
    },
  },
  computed: mapGetters(['getMovie']),
  async created() {
    try {
      this.movie = await moviesAPI.getMovie(this.id);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  mixins: [ratingMixin],
};
</script>

<style lang="scss" scoped>
#movie-preview {
  display: flex;
  overflow: auto;

  .loading {
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 1;
  }

  #movie-container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    margin-top: 90px;
    padding: 0 1rem;

    #movie-poster {
      flex-grow: 1;
      min-width: 400px;

      img {
        width: 300px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
          0 10px 10px rgba(0, 0, 0, 0.473);
        margin-bottom: 7px;
        border-radius: 15px;
      }
    }

    #movie-info {
      display: flex;
      flex-grow: 2;
      text-align: left;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        color: white;
        margin-bottom: 2rem;
      }

      h3 {
        color: rgb(143, 143, 143);

        #movie-rating {
          display: flex;
          justify-content: center;
          border-radius: 10px;
          font-size: 20px;
          width: 53px;
          color: white;
        }

        span {
          margin-right: 5px;
        }
      }

      #options {
        max-width: 180px;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        .edit {
          height: 30px;
          width: 80px;
          background-color: #5eb85e;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
        }

        .delete {
          height: 30px;
          width: 80px;
          background-color: #e10505;
          border: none;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      margin-bottom: 90px;

      & > #movie-poster {
        min-width: 300px;
      }
    }
  }

  #movie-form {
    display: flex;
    flex-direction: column;
    text-align: left;

    & > div {
      display: flex;
      flex-direction: column;

      #actor-input {
        display: flex;
        justify-content: space-between;
      }
    }

    .add-actor {
      background-color: green;
      text-align: center;
      color: white;
      margin-left: 5px;
      height: 100%;
      padding: 2px 10px;
      font-size: 20px;
      padding: 1re;
      align-self: center;
      cursor: pointer;
    }
  }

  #update-movie {
    background-color: #5eb85e;
    border: none;
    padding: 5px;
    width: 70px;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
  }
}
</style>
