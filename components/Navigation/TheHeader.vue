<template>
	<div class="header-container">
		<header>
			<TheSideNavToggle @toggle="$emit('sidenavToggle')"/>
			<div class="logo">
				<nuxt-link to="/"> BASE CMS </nuxt-link>
			</div>

			<div class="spacer"></div>
			<div class="nav-items">
				<ul class="nav-list">
					<li class="nav-item"> <nuxt-link to="/posts"> Blog </nuxt-link> </li>
					<li class="nav-item"><nuxt-link to="/about"> About </nuxt-link> </li>
					<li class="nav-item"> <nuxt-link to="/admin"> Admin  </nuxt-link></li>
				</ul>
			</div>
		</header>
	</div>
</template>

<script>
	import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

	export default {
		name: "TheHeader",
		components: {
			TheSideNavToggle
		}
	}
</script>