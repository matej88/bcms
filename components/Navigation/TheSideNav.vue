<template>
<div class="sidenav-container">

  <transition name="slide-side">
    <div
      v-if="show && toggleShow"
      class="sidenav">
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: "TheSideNav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () { 
    return {
      toggleShow: this.show
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleToggle)
  },
  methods: {
    handleToggle() {
     this.toggleShow = window.innerWidth < 1159 ? true : false;
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  position: fixed;
  margin-top: 85px;
  display: flex;
  z-index: 9999;
  width: 96.5%;
  padding: 0 1.39vw;
}

.sidenav {
  height: 100vh;
  width: 100%;
  z-index: 10000;
  box-sizing: border-box;
  transition: top 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  align-items: center;
  background: rgba(33,33,33,1);
  opacity: 1;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.4s cubic-bezier(.25,.8,.25,1);
}
.slide-side-enter,
.slide-side-leave-to {
  opacity: 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.nav-item {
  margin: 10% 0;
}

.nav-item a {
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 800;
  font-size: 1.3rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
