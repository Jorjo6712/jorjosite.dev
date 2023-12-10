<template>
    <div name="navbar" class="flex justify-center items-center font-mono bg- py-2 sticky"> 
        <li name="navbar-children" class="list-none">
            <router-link to="/">
                <a>
                    <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                        <span>Home</span>
                        <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z" fill="currentColor" fill-rule="evenodd"/>
                        </svg>
                    </button>
                </a>
            </router-link>
            <router-link to="/Projects">
                <a>
                    <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                        <span>Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M8 0a8 8 0 0 0-2.534 15.59c.4.074.546-.174.546-.386 0-.19-.007-.692-.01-1.36-2.02.368-2.46-.49-2.46-.49-.333-.848-.813-1.07-.813-1.07-.665-.456.05-.447.05-.447.738.052 1.128.756 1.128.756.656 1.123 1.72.798 2.137.61.066-.476.254-.8.462-.98-1.617-.183-3.314-.808-3.314-3.592 0-.796.284-1.448.755-1.958-.075-.183-.327-.927.072-1.927 0 0 .613-.196 2.01.747a7.09 7.09 0 0 1 1.923-.26c.654.002 1.31.088 1.923.26 1.396-.943 2.008-.747 2.008-.747.4 1 .148 1.744.073 1.927.473.51.754 1.162.754 1.958 0 2.792-1.7 3.407-3.32 3.586.26.226.496.67.496 1.352 0 .974-.009 1.756-.009 1.992 0 .213.145.464.55.385A8.008 8.008 0 0 0 8 0z"/>
                        </svg>
                    </button>
                </a>
            </router-link>
            <router-link to="/Other">
                <a>
                    <button class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-4 py-2 inline-flex justify-center items-center">
                        <span>Other</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 40 0.5" fill="currentColor">
                            <circle cx="10" cy="10" r="4" />
                            <circle cx="20" cy="10" r="4" />
                            <circle cx="30" cy="10" r="4" />
                        </svg>
                    </button>
                </a>
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
