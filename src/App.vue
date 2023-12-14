<template>
  <div id="app" class="archivo">
    <NavBar/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="in-out">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background: rgb(32, 32, 35);
  margin: 0;
  padding: 0;
}
button {
  font-family: "Archivo";
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-out;
}


@import './dist/main.css';
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;400&display=swap');
</style>
