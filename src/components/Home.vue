<template>
    <router-view/>
    <NavBar />
    <HeadinG/>
</template>

<script>
import NavBar from './Navbar.vue'
import HeadinG from './Heading.vue'

export default {
    name: "HomePage",
    components: {
        NavBar,
        HeadinG
    }
}
</script>


<style>

</style>