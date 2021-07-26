<template>
  <div id="filters">
    <h3>Filters</h3>

    <p v-for="filter in filters" @click="sortMovies(filter)">
      {{ filter.name }}
    </p>
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

  p {
    margin-left: 10px;
  }
}
</style>
