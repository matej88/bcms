import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: [],
			token: null
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts
			},
			addPost(state, post) {
				state.loadedPosts.push(post);
			},
			editPost( state, editedPost) {
				const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
				state.loadedPosts[postIndex] = editedPost;
			},
			setToken(state, token) {
				state.token = token; 
			},
			clearToken(state) {
				state.token = null;
			}
		},
		actions: {
			setPosts(vuexContext, posts) {
				vuexContext.commit('setPosts', posts);
			},
			nuxtServerInit(vuexContext, context) {
				return axios.get('https://base-cms-a171d.firebaseio.com/posts.json')
				.then( res => {
					const postsArray = []
					for ( const key in res.data) {
						postsArray.push({ ...res.data[key], id: key})
					}
					vuexContext.commit('setPosts', postsArray)
				})
				.catch( e => context.error(e));
			},
			addPost( vuexContext, post) {
				const createdPost = {
					...post,
					updatedDate: new Date()
				}
				return axios.post('https://base-cms-a171d.firebaseio.com/posts.json?auth=' + vuexContext.state.token, createdPost)
					.then( res => {
						vuexContext.commit('addPost', {...createdPost, id: res.data.name})
					})
					.catch ( e => console.log("e", e))
			},
			editPost( vuexContext, editedPost) {
				return axios.put('https://base-cms-a171d.firebaseio.com/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
					.then( res => {
						vuexContext.commit('editPost', editedPost)
					})
					.catch( e => console.log(e))
			},
			authenticateUser(vuexContext, authData) {
				let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey;
				if(!authData.isLogin) {
					authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey;
				} 
				return this.$axios.$post(authUrl , {
					email: authData.email,
					password: authData.password,
					returnSecureToken: true
				})
				.then( res => {
					vuexContext.commit('setToken', res.idToken);
					localStorage.setItem('token', res.idToken);
					localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)

					Cookie.set('jwt', res.idToken);
					Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
				})
				.catch (e => console.log(e))
			},
			initAuth(vuexContext, req) {
				let token
				let expirationDate
				if(req){
					if(!req.headers.cookie) {
						console.log("return son")
						return;
					}

					const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
					
					if(!jwtCookie) {
						console.log("return son2")
						return;
					}
					token = jwtCookie.split('=')[1];
					console.log("token ", token)
					expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
					console.log("expirationDate ", expirationDate)
				} else {
					token = localStorage.getItem("token");
					expirationDate = localStorage.getItem('tokenExpiration')
					}
					if(new Date().getTime() > +expirationDate || !token) {
						console.log('No token or invalid token')
						vuexContext.dispatch('logout')
						return;
					}

				vuexContext.commit('setToken', token);
			},
			logout(vuexContext) {
				vuexContext.commit('clearToken')
				Cookie.remove('token')
				Cookie.remove('expirationDate')
				if(process.client) {
					localStorage.removeItem('token')
					localStorage.removeItem('tokenExpiration')
				}
			}
		},
		getters: {
			loadedPosts(state) {
				return state.loadedPosts;

			},
			isAuthenticated(state) {
				return state.token != null;
			}
		}
	})
} 


export default createStore