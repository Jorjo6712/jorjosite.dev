<template>
    <div name="navbar" class="flex justify-center items-center font-mono py-2 sticky"> 
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"></button>
          <v-icon name="gi-hamburger-menu" scale="2" inverse />
        </div>
    </div>
    <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col justify-center items-center mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-3 md:mt-0">
        <router-link to="/">
            <button class="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-6 py-3 inline-flex justify-center items-center">
                <span>Home</span>
                <v-icon name="bi-house-fill" animation="flash" hover/>
            </button>
        </router-link>
        <router-link to="/Projects">
            <button class="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-6 py-3 inline-flex justify-center items-center">
                <span>Projects</span>
                <v-icon name="bi-github" animation="flash" hover/>
            </button>
        </router-link>
        <router-link to="/Other">
            <button class="rounded-full focus:outline-none focus:ring-0 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-6 py-3 inline-flex justify-center items-center">
                <span>Other</span>
                <v-icon name="md-morehoriz" animation="flash" hover/>
            </button>
        </router-link>
    </ul>
</template>

<script>
import { ref } from 'vue';


export default {
    name: "NavBar",
    props: {},
    components: { 
    
    },
    setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
}
</script>
