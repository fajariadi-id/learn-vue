<template>
  <div id="sidebar">
    <Filters />

    <button @click="showModal = true">Add Movie</button>

    <Modal v-if="showModal" @close="showModal = !showModal">
      <template v-slot:header>
        <h3 class="m-0">Create new movie</h3>
      </template>

      <template v-slot:body>
        <form @submit="submitMovie" ref="movieForm" id="movie-form">
          <p>Fill out the details bellow</p>
          <input required v-model="form.name" type="text" placeholder="Name" />

          <input
            required
            v-model="form.year"
            type="number"
            placeholder="Year"
          />

          <input
            required
            v-model="form.rating"
            type="number"
            placeholder="Rating"
          />

          <input
            required
            v-model="form.genre"
            type="text"
            placeholder="Genre"
          />

          <input
            required
            v-model="form.budget"
            type="text"
            placeholder="Budget"
          />

          <input
            required
            v-model="form.boxOffice"
            type="text"
            placeholder="Box Office"
          />

          <input
            required
            v-model="form.poster"
            type="text"
            placeholder="Poster"
          />

          <hr />

          <div>
            <div id="actor-input">
              <p class="m-0">Actors</p>
              <span @click="addActor" class="add-actor">+</span>
            </div>

            <input
              required
              v-for="(actor, index) in form.actors"
              :key="index"
              v-model="form.actors[index].name"
              type="text"
              placeholder="Actor"
            />
          </div>

          <hr />

          <textarea
            required
            v-model="form.storyline"
            placeholder="Storyline"
            rows="6"
          />
        </form>
      </template>

      <template v-slot:footer>
        <button id="add-movie" @click="$refs.movieForm.requestSubmit()">
          Add
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Filters from '../components/Filters.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'Sidebar',
  components: {
    Filters,
    Modal,
  },
  data() {
    return {
      showModal: false,
      form: {
        name: '',
        year: '',
        rating: '',
        genre: '',
        budget: '',
        boxOffice: '',
        poster: '',
        storyline: '',
        actors: [{ name: '' }],
      },
    };
  },
  methods: {
    ...mapActions(['addMovie']),
    addActor() {
      this.form.actors.push({ name: '' });
    },
    submitMovie(e) {
      e.preventDefault();

      this.addMovie(this.form);

      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100vh;
  min-width: 150px;
  max-width: 150px;
  flex-grow: 1;
  background-color: #191c1f;
  justify-content: left;

  @media (max-width: 900px) {
    & {
      min-height: 80px;
      max-width: 100%;
      position: fixed;
      top: 50px;
      right: 0;
      left: 0;
      z-index: 1;
    }
  }

  & > button {
    margin-top: 20px;
    height: 30px;
    background-color: #5eb85e;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    position: sticky;
    top: 300px;

    @media (max-width: 900px) {
      position: unset;
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

  #add-movie {
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
