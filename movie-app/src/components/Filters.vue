<template>
  <div id="filters">
    <h3>Filters</h3>

    <div>
      <p v-for="filter in filters" @click="sortMovies(filter)">
        {{ filter.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Filters',
  data() {
    return {
      filters: [
        { name: 'Rating Highest', sortBy: 'rating', order: 'desc' },
        { name: 'Rating Lowest', sortBy: 'rating', order: 'asc' },
        { name: 'Newest', sortBy: 'year', order: 'desc' },
        { name: 'Oldest', sortBy: 'year', order: 'asc' },
      ],
    };
  },
  methods: {
    ...mapActions(['sortMovies']),
  },
};
</script>

<style lang="scss" scoped>
#filters {
  text-align: left;
  color: rgb(143, 143, 143);
  cursor: pointer;
  position: sticky;
  top: 60px;

  p {
    margin-left: 10px;
  }

  @media (max-width: 900px) {
    text-align: center;
    position: unset;

    & > h3 {
      margin: 5px 0 10px;
    }

    & > div {
      display: flex;
      justify-content: center;

      & > p {
        margin: 5px;
      }
    }
  }
}
</style>
