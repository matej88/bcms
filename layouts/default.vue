<template>
  <div>
    <TheHeader @sidenavToggle=" displaySidenav = !displaySidenav"/>
    <TheSideNav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from "@/components/Navigation/TheHeader"
  import TheSideNav from "@/components/Navigation/TheSideNav"

  export default {
    components: {
      TheHeader,
      TheSideNav
    },

    data() {
      return {
        displaySidenav:false
      }
    }
  }
</script>

<style>
html {
  font-family: Roboto,sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
