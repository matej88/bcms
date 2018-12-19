<template>
	<div class="sidenav-container">
		<div
		v-if="show"
		class="sidenav-backdrop"
		@click="$emit('close')"></div>

		<transition name="slide-side">
			<div class="sidenav" v-if="show">
				<ul class="nav-list" @click="$emit('close')">
					<li class="nav-item"> Blog </li>
					<li class="nav-item"> About </li>
					<li class="nav-item"> Admin </li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'TheSideNav',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>