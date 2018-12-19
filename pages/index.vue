<template>
  <div class="home-page">
    <section class="intro">
      <h1>Main theme of the webpage</h1>
    </section>

      <PostList :posts="loadedPosts" />

  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  };
</script>


<style scoped>
.intro {
  height: 500px;
  position: relative;
  padding: 50px;
  box-sizing: border-box;
  background-image: url('~assets/images/wallhaven-572946.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}
</style>