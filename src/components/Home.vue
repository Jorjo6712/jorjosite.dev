<template>
<div class="flex flex-col justify-center items-center w-full h-full">
    <div class="max-w-lg max-h-lg flex mt-20 justify-center items-center">
        <div class="rounded-lg bg-white shadow dark:bg-gray-900 acrylic">
            <div class="py-4 px-6">
                <p id="card" class="text-base text-center font-bold text-neutral-950 dark:text-neutral-200 opacity-100">
                    Hi, I am a developer <v-icon name="fa-code" scale="1.2" animation="pulse" /> 
                    based in Denmark.
                </p>
            </div>
        </div>
    </div>
    <div class="h-full w-2/4 mt-16 pt-10 pb-10 px-12 shadow shadow-black bg-gray-900 rounded-xl flex-col justify-center items-center"> 
        <h1 class="text-4xl text-white font-bold">Yordan Mitov</h1>
        <h2 class="text-xl text-gray-600 font-bold mt-0.5">Systems Developer</h2>
        <h1 class="text-2xl text-white font-shadow mt-5 "> Background: </h1>
        <hr class="border-yellow-300 border-y-2 mt-2 mb-2 rounded-xl"/>
        <p class="text-neutral-200 text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
 
</template>

<script>

export default {
    name: "HomePage",
    components: {
    },
}


</script>

<style>
* {
  font-family: "Archivo";
}
</style>