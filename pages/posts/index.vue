<template>
	<PostList :posts="loadedPosts"/>
</template>

<script>
  export default {
    middleware: 'log',
    computed: {
    	loadedPosts() {
    		return this.$store.getters.loadedPosts
    	}
    }
}
   
</script>
