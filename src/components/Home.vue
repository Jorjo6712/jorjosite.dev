<template>
<div class="flex flex-col justify-center items-center w-full h-full">
    <div class="max-w-lg max-h-lg flex mt-20 justify-center items-center">
        <div class="rounded-lg shadow bg-gray-900 acrylic">
            <div class="py-4 px-6">
                <p ref="welcomeMsg" class="text-base text-center font-bold text-neutral-200 opacity-100"/>
            </div>
        </div>
    </div>
    <div class="lg:h-full lg:w-5/12 lg:mt-16 lg:mb-2 lg:pt-10 lg:pb-10 lg:px-12 min-[320px]:h-full min-[320px]:w-11/12 min-[320px]:mt-16 min-[320px]:mb-4 min-[320px]:pt-10 min-[320px]:pb-10 min-[320px]:px-4 shadow shadow-black bg-gray-900 rounded-xl flex-col justify-center items-center">
        <h1 class="text-4xl text-white font-bold"> Yordan Mitov </h1>
        <h2 class="text-xl text-gray-600 font-bold mt-0.5"><v-icon name='fa-code' scale='1.3'/> Systems Developer </h2>
        <hr class="border-purple-400 border-y-2 mt-2 mb-2 rounded-xl"/>
        <p class="text-neutral-200 lg:text-lg lg:text-justify min-[320px]:text-base min-[320px]:text-wrap">
            I'm a 19 year old studying in Ringsted, Denmark. 
            I've been expirmenting with programming since I was 15 years old with small projects here and there, 
            but back then I never could get the gitst of it. Today I feel more confident in my ability to code so as of 
            May 2023 I am a Datatechnican with a speciality in Programming or in other words a systems developer student.
            Formerly I studied It-Support but had no general interest in it aside from the salary that I was going to use
            to fund my greater goal of certifying myself to become a RedTeam member or otherwise Penetration Tester as 
            cybersecurity is another big interest of mine. Nowadays I sort of have a bit of knowhow in most fields
            of IT so I'm never bored. I've learned many great things along the way and hope to learn more as time
            goes <v-icon name='bi-emoji-smile-upside-down-fill' fill="yellow" scale='1.3'/>.  
        </p>
    </div>
    <h1 class="justify-center text-4xl mb-2 text-white"> Frameworks & Tools </h1>
    <div class="lg:flex lg:flex-row lg:gap-4 lg:flex-wrap lg:justify-center lg:items-center lg:mb-2 lg:h-11/12 lg:w-6/12 min-[320px]:w-11/12 min-[320px]:mb-2 min-[320px]:grid min-[320px]:grid-cols-1 min-[320px]:grid-rows-4 min-[320px]:gap-4">
        <div class="lg:w-5/12 lg:justify-start lg:items-center lg:py-2 min-[320px]: min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="vi-file-type-reactjs" scale='3'/>
            <h1 class="text-white"> React.js </h1>
            <hr class="border-gray-600 w-16">
            <p class="text-white mt-1.5"> 
                I am going to be learning React for the next couple of months
                and using it along with typescript for other projects as a change
                of pace from using Vue.
            </p>
        </div>
        <div class="lg:w-5/12 lg:flex-wrap lg:justify-start lg:items-center lg:py-2 min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="vi-file-type-vue" scale='3'/>
            <h1 class="text-white"> Vue.js </h1>
            <hr class="border-gray-600 w-12">
            <p class="text-white mt-1.5"> 
                I am currently learning Vue and wrote this portfolio using it.
                I think it's a fine framework to use for reactive frontends
                and it's been really kind to me 
            </p>
        </div>
        <div class="lg:w-5/12 lg:flex-wrap lg:justify-start lg:items-center lg:py-2 min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="si-tailwindcss" fill="cyan" scale='3'/>
            <h1 class="text-white"> Tailwind </h1>
            <hr class="border-gray-600 w-16">
            <p class="text-white mt-1.5">
                I've been using Tailwind for about 4 months now and I've never been happier in terms of styiling a page.
                Quick custom css with hot reload is a pleasant reality to live in when doing frontend.
            </p>
        </div>
        <div class="lg:w-5/12 lg:h-3/12 lg:flex-wrap lg:justify-start lg:items-center lg:py-2 min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="co-dot-net" scale='3' fill="purple" inverse/>
            <h1 class="text-white"> .NET </h1>
            <hr class="border-gray-600 w-10">
            <p class="text-white mt-1.5">
                I've both had pleasent and bad expriences with .NET as razor components in blazor or asp.net pages aren't my favorite tools to write frontend with
                but as far as i am aware are great for backend.
            </p>
        </div>
        <div class="lg:w-5/12 lg:h-3/12 lg:flex-wrap lg:justify-start lg:items-center lg:py-2 min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="si-threedotjs" scale='3' fill="white" inverse/>
            <h1 class="text-white"> Three.js </h1>
            <hr class="border-gray-600 w-16">
            <p class="text-white mt-1.5">
                This portfolio is my first use of Three.js. I discovered it a bit before the idea of making a portfolio came around and figured it'd
                a great addition to have.
            </p>
        </div>
    </div>
    <h1 class="justify-center text-4xl mb-2 outline-6 outline-black text-white"> Languages </h1>
    <div class="lg:flex lg:flex-row lg:gap-4 lg:flex-wrap lg:justify-center lg:items-center lg:mb-2 lg:h-11/12 lg:w-6/12 min-[320px]:w-11/12 min-[320px]:mb-2 min-[320px]:grid min-[320px]:grid-cols-1 min-[320px]:grid-rows-4 min-[320px]:gap-4">
        <div class="lg:w-5/12 lg:justify-start lg:items-center lg:py-2 min-[320px]: min-[320px]:px-4 min-[320px]:py-2 rounded-xl bg-gray-900 shadow shadow-black">
            <v-icon name="co-javascript" fill="yellow" scale='3'/>
            <h1 class="text-white"></h1>
        </div>
    </div>
</div>
</template>

<script>

import { ref, onMounted } from 'vue'
import TypeIt from 'typeit'

export default {
    name: "HomePage",
    components: {
    },
    setup() {
        const welcomeMsg = ref(null)
        
        // When component is mounted on the viewport the typeit object gets initialized
        onMounted(() => {
            if (welcomeMsg.value) {
                welcomeMsg.value.innerHTML = ''
                new TypeIt(welcomeMsg.value, {
                    strings: "Hi, I am a developer based in Denmark.",
                    speed: 50,
                    loop: false,
                }).go()
            } else {
                console.error("Element with ID 'welcomeMsg' not found.")
            }
        });
        return { welcomeMsg }
    },
}
</script>

<style>
* {
  font-family: "Archivo"
}
</style>