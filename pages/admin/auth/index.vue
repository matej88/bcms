<template>
	<div class="admin-auth-page">
		<div class="auth-container">
			<form @submit.prevent="onSubmit">
				<AppControlInput type="email" v-model="email"> Email Address </AppControlInput>
				<AppControlInput type="password" v-model="password"> Password </AppControlInput>
				<AppButton type="submit">{{isLogin ? 'Login' : 'Sign Up'}}</AppButton>
				<AppButton 
					type="button"
					btn-style="inverted"
					style="marign-left: 10px"
					@click="isLogin = !isLogin"> Switch to {{ isLogin ? 'SignUp' : 'Login'}} </AppButton>
			</form>
		</div>
	</div>
</template>


<script>

	export default {
		name: 'AdminAuthPage',
		layout: 'admin',
		data() {
			return {
				isLogin: true,
				email: '',
				password: ''
			}
		},
		methods: {
			onSubmit() {
				this.$store.dispatch('authenticateUser', {
					isLogin: this.isLogin,
					email: this.email,
					password: this.password
				})
				.then( () => {
					this.$router.push('/admin')
				})
			}
			
		}
	}
</script>