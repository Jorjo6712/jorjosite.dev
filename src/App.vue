<template>
  <div id="app" ref="container">
    <NavBar/>
      <router-view v-slot="{ Component }">
        <transition enter-from-class="slide-in-opacity" enter-active-class="slide-in-bottom" leave-active-class="slide-out-bottom" leave-to-class="slide-out-opacity" mode="out-in">
          <component :is="Component" />
        </transition> 
      </router-view>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    const container = this.$refs.container;
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({antialias: true})

    renderer.setSize(window.innerWidth * 2.5, window.innerHeight * 2.5)

    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1)
    scene.add(hemisphereLight)

    const loader = new GLTFLoader()

      loader.load( 'scene.gltf', function ( gltf ) {

      scene.add( gltf.scene )

    }, undefined, function ( error ) {

      console.error( error )

    } )
   
    scene.background = new THREE.Color(0x242345)
    scene.backgroundBlurriness = 1

    camera.position.z = 3
    camera.position.y = 1 
    camera.position.x = 1
    
    const animate = function () {

      camera.fov += 0.005

      if (camera.fov >= 70)
      {
        camera.fov =- 0.5
      }

      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

  * {
    scrollbar-width: none;
    scrollbar-color: #282828;
  }

  *::-webkit-scrollbar {
    width: 0px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #111827;
    border-radius: 15px;
    border: 5px none #ffffff;
  }

canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: -9999;
  filter: blur(10px);
  margin: -15px;
}

button {
  font-family: "Archivo";
}

.slide-in-opacity {
  opacity: 100;
}

.slide-out-opacity {
  opacity: 0;
}

.slide-in-bottom {
	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-1-9 13:3:50
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
 @-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.slide-out-bottom {
	-webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-1-9 13:6:23
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-bottom
 * ----------------------------------------
 */
 @-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
}

@import './dist/main.css';
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;400&display=swap');
</style>
