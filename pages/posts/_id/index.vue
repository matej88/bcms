<template>
	<div class="single-post-page">
		<section class="post">
			<h1>{{loadedPosts.title}}</h1>
			<div class="post-details">
				<div>Last updated  on {{loadedPosts.updatedDate}}</div>
				<div>written by {{loadedPosts.author}}</div>
			</div>
			<p>{{loadedPosts.content}}</p>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		asyncData(context) {
			return axios.get('https://base-cms-a171d.firebaseio.com/posts/' + context.params.id + '.json')
				.then( res => {
					return {
						loadedPosts: res.data
					}
				})
				.catch ( e => context.error(e)) 
		}
	}
</script>
<style scoped>

</style> 