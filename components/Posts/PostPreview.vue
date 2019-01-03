<template>

  
    <article class="post-preview">
      <div class="post-content" :style="{background: 'url(' + thumbnail + ')'}">
        <h1 class="post-title">{{title}}</h1>
        <p class="post-preview-text">{{ previewText }}</p>
		<nuxt-link :to="postLink" > Go to post</nuxt-link>
      </div>

    </article>
  

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
  display: flex;
  margin: 0;
  padding: 0;
  height: 350px;

}


.post-title {
	margin: 0;
	text-decoration: none;
}

.post-title {
	width: 40%;
	font-size: 26px;
	border-bottom: 1px solid rgba(255,255,255,0.5);
	font-weight: 800;
	letter-spacing: 3px;
	color: rgba(255,255,255,0.8);
	padding: 10px 0;
	text-transform: uppercase;
}

.post-content {
	width: 100%;
	height: 100%;
	background-size: cover!important;
	background-position: center!important;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

}

.post-content a {
	text-align: center;
	font-size: 10px;
	color: rgba(255,255,255,0.6);
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-top: 15px;
}

.post-preview-text{
	color: #fff;
	font-size: 14px;
	font-weight: 300;
	letter-spacing: 1px;
	color: rgba(255,255,255,0.7);
	padding: 10px 0;
	margin: 0px;
}

@media (min-width: 768px) { 
	article {
		width: 100%!important;
	}
}
</style>
