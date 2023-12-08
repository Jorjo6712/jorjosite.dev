<template>
    <div name="navbar" class="flex justify-center items-center font-mono bg- py-4"> 
        <li name="navbar-children" class="list-none gap-3">
            <a><button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2"><span>Home</span></button></a>
            <a><button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2"><span>Projects</span></button></a>
            <a><button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2"><span>Contributions</span></button></a>
            <a><button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2"><span>Check out</span></button></a>
        </li>
    </div>
</template>

<script>
export default {
    name:"NavBar",
    props:{},
}
</script>
