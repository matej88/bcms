<template>
	<section class="post-list">
  		<PostPreview v-for="post in posts" 
      :key="post.id" 
      :id="post.id" 
      :is-admin="isAdmin" 
      :thumbnail="post.thumbnail" 
      :title="post.title" 
      :previewText="post.previewText"
      />
</section>

</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

  export default {
    components: {
      PostPreview: PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      posts: { 
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
section{
  position: relative;
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  section {
    flex-direction: row;
  }
}

</style>