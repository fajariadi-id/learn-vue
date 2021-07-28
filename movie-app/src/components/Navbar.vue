<template>
  <div id="navbar-wrap" class="card-shadow">
    <div id="navbar">
      <h2 @click="$router.push('/')">Vue Movie App</h2>

      <!-- @change="searchMovies($event)" -->
      <div v-if="$route.path === '/'">
        <input type="text" placeholder="Find movie..." v-model="search" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions(['searchMovies']),
  },
  watch: {
    search() {
      this.searchMovies(this.search);
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar-wrap {
  position: fixed;
  width: 100%;
  z-index: 9999;

  #navbar {
    display: flex;
    padding: 15px;
    justify-content: space-between;
    background-color: #a34c01;

    h2 {
      margin: 0 1rem 0 0;
      color: white;
      cursor: pointer;
    }

    & > div {
      input {
        width: 100%;
        border: none;
        height: 25px;
        border-radius: 10px;
        box-sizing: border-box;
        outline: none;
        padding: 5px;
      }
    }
  }

  @media (max-width: 900px) {
    & > #navbar {
      & > h2 {
        font-size: 18px;
      }
    }
  }
}
</style>
