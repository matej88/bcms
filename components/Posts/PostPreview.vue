<template>

  <nuxt-link :to="postLink">
    <article class="post-preview">
      <div class="post-thumbnail" ></div>
      <div class="post-content" :style="{background: 'url(' + thumbnail + ')'}">
        <h1>{{title}}</h1>
        <p>{{ previewText }}</p>

      </div>
    </article>
  </nuxt-link>

</template>

<script>
export default {
	name: 'PostPreview',
	props: {
		id: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		previewText: {
			type: String,
			required: true
		},
		thumbnail: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			required: true
		}

	},
	computed: {
		postLink() {
			return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
		}
	}
}

</script>

<style scoped>

.post-preview {
  border-bottom: 1px solid black;
  height: 200px;
  width: 500px;
}

.post-content {
	width: 100%;
	height: 100%;
}

</style>
