<template>
  <div class="project">
    <img :src="project.img" alt="" />

    <div class="info">
      <h3>{{ project.title }}</h3>

      <div class="tags">
        <span v-for="tag in project.tags" class="tag">{{ tag }}</span>
      </div>

      <p>{{ project.description }}</p>

      <div class="link-container">
        <a :href="project.web" target="_blank" class="web"
          ><i class="fas fa-globe"></i>Website</a
        >
        <a :href="project.repo" target="_blank" class="repo"
          ><i class="fab fa-github"></i>Repository</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// import {} from '../assets/scss/_variables.scss';

export default {
  name: 'Project',
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.project {
  /* width: 100%; */
  /* max-width: 400px; */
  margin: 10px;
  /* background-color: red; */
  box-shadow: $shadow;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover {
    & > .info {
      transform: translateY(0);
      transition-delay: 0.3s;
    }
  }

  .info {
    padding: 20px;
    position: absolute;
    max-height: 100%;
    overflow: auto;
    right: 0;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: all 0.5s ease;

    background: linear-gradient(
      to top,
      #222222cc,
      rgba($color: #222, $alpha: 0)
    );

    @media (max-width: 576px) {
      background-color: #22222280;

      &::-webkit-scrollbar {
        display: none;
      }

      h3 {
        color: $clr-white;
      }
    }

    .link-container {
      display: flex;

      a {
        display: block;
        background-color: red;
        margin-right: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.3s ease;

        i {
          margin-right: 5px;
        }

        &.web {
          background-color: $clr-white;

          &:hover {
            background-color: $clr-white-hover;
          }
        }

        &.repo {
          background-color: $clr-black;
          color: $clr-white;

          &:hover {
            background-color: $clr-black-hover;
          }
        }
      }
    }

    h3 {
      margin-bottom: 5px;
    }

    p {
      color: $clr-white;
    }
  }

  .tags {
    display: flex;
    margin-bottom: 10px;

    .tag {
      margin-right: 5px;
      background-color: $clr-green;
      padding: 0 5px;
      border-radius: 5px;
      color: $clr-white;
    }
  }
}
</style>
