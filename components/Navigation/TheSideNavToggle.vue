<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
  margin-left: auto;
}

@media (min-width: 1160px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 90%;
  height: 3px;
  background-color: white;
}


</style>
