<template>
<div class="header-container" :class="{'fixed-header' : scrolled}">
  <header class="the-header" ref="headerContent">
     
    <div class="logo-wrapper">
    	<img class="logo-img" src="../../assets/images/logo.png"></img>
    	<nuxt-link to="/"><span>Frölunda</span>Kampsportcenter</nuxt-link>
    </div>
	<div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">Våra kampsporter</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">Om klubben</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Schema & Priser</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">Börja träna</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Kontakt</nuxt-link></li>
      </ul>
    </div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  data () {
  	return { scrolled: false }
  },
  mounted () {
  	window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
  	handleScroll() {
      this.scrolled = window.scrollY >= 48;
  	}
  }
};
</script>


<style scoped>
.header-container {
  position: fixed;
	display: flex;
  z-index: 999;
	justify-content: center;
	transition: margin 0.4s cubic-bezier(.25,.8,.25,1);
	margin-top: 50px;
  width: 96.5%;
  padding: 0 1.4vw;
  height:85px;
  align-content: center;
  align-items: center;
  

}
.fixed-header {
	bakground: white!important;
	margin: 0px;
}

header {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 15px 30px;
  box-sizing: border-box;
  align-items: center;
  transition: padding 0.4s cubic-bezier(.25,.8,.25,1);
  background: rgba(33,33,33,1);
}

.logo-wrapper {
	height: 100%;
  width: auto;
  font-size: 1.1rem;
  display: flex;

  justify-content: center;
  align-content: center;
  transition: all 0.3s ease-in;
}

.logo-img {

	height: 100%;
  width: auto;
	z-index: 9999;
	align-self: center;
	transition: all 0.3s ease-in;
}

.logo-wrapper a {
  text-decoration: none;
  color: #ff3838;
  font-weight: 200;
  font-size: 21px;
  letter-spacing: 1px;
  text-transform: uppercase;
  align-self: center;
  padding-left: 5px;
  transition: all 0.3s ease-in;
}

.logo-wrapper a span {
	font-weight: 600;
	color: #fff;
  letter-spacing: 2px;
	font-size: 21px;
	transition: all 0.3s ease-in;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
  justify-content: flex-end;
}


.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin-left: 30px;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
}

.nav-item a {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: #eef1f5;
  padding: 7px 0;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #ff3838;
  border-bottom: 1px solid #ff3838;
}
@media (max-width: 1550px) { 
	.logo-img {
		height: 95%;
    width: auto;
	}
	.logo-wrapper a span{ 
		font-size: 20px;
	}
	.logo-wrapper a { 
		font-size: 19px;
	}
	.nav-item {
		font-size: 13px;
	}
}

@media (max-width: 1270px) {
	.header-container {
		margin-top: 0px!important;
	}
	.nav-item {
		margin-left: 15px;
	}
}
@media (min-width: 1160px) {
	
	.navigation-items {
	display: block;
	}

}

</style>
