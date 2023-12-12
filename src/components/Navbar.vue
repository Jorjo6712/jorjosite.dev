<template>
    <div name="navbar" class="flex justify-center items-center font-mono bg- py-2 sticky"> 
        <li name="navbar-children" class="list-none">
            <router-link to="/">
                <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                    <span>Home</span>
                    <v-icon name="bi-house-fill" animation="wrench" hover/>
                </button>
            </router-link>
            <router-link to="/Projects">
                <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                    <span>Projects</span>
                    <v-icon name="bi-github" />
                </button>
            </router-link>
            <router-link to="/Other">
                <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                    <span>Other</span>
                    <v-icon name="md-morehoriz" />
                </button>
            </router-link>
        </li>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {},
    components: { 
    
    }
}
</script>
