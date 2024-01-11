<template>
<div class="flex flex-col justify-center items-center w-full h-full">
    <div class="max-w-lg max-h-lg flex mt-20 justify-center items-center">
        <div class="rounded-lg bg-white shadow dark:bg-gray-900 acrylic">
            <div class="py-4 px-6">
                <p id="welcomeMsg" class="text-base text-center font-bold text-neutral-950 dark:text-neutral-200 opacity-100"/>
            </div>
        </div>
    </div>
    <div class="lg:h-full lg:w-2/4 lg:mt-16 lg:mb-4 lg:pt-10 lg:pb-10 lg:px-12 min-[320px]:h-full min-[320px]:w-11/12 min-[320px]:mt-16 min-[320px]:mb-4 min-[320px]:pt-10 min-[320px]:pb-10 min-[320px]:px-4 shadow shadow-black bg-gray-900 rounded-xl flex-col justify-center items-center"> 
        <h1 class="text-4xl text-white font-bold">Yordan Mitov</h1>
        <h2 class="text-xl text-gray-600 font-bold mt-0.5"><v-icon name='fa-code' scale='1.3'/> Systems Developer | Security Geek</h2>
        <h1 class="text-2xl text-white font-shadow mt-5 "># Background </h1>
        <hr class="border-purple-400 border-y-2 mt-2 mb-2 rounded-xl"/>
        <p class="text-neutral-200 lg:text-lg lg:text-justify min-[320px]:text-base min-[320px]:text-wrap">
            I'm a 18 year old soon to be 19 studying in Ringsted, Denmark. 
            I've been expirmenting with programming since I was 15 years old with small projects here and there, 
            but back then I never could get the gitst of it. Today I feel more confident in my ability to code so as of 
            May 2023 I am a Datatechnican with a speciality in Programming or in other words a systems developer student.
            Formerly I studied It-Support but had no general interest in it aside from the salary that I was going to use
             to fund my greater goal of certifying myself to become a RedTeam member or otherwise Penetration Tester as 
             cybersecurity is another big interest of mine. Nowadays I sort of have a bit of knowhow in most fields
              of IT so I'm never bored. I've learned many great things along the way and hope to learn more as time
               goes <v-icon name='bi-emoji-smile-upside-down-fill' fill="yellow" scale='1.3'/>.  
        </p>
        <div class="items-center text-white text-2xl bolder"># Languages</div>
        <hr class="border-purple-400 border-y-2 mt-2 mb-2 rounded-xl"/>
        <div class="lg:flex lg:flex-row lg:flex-shrink min-[320px]:grid min-[320px]:grid-flow-col min-[320px]:grid-cols-2 min-[320px]:grid-rows-3 min-[320px]:w-full">
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-blue-400 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="vi-file-type-python" scale="4" animation="pulse" hover/></div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-green-700 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="vi-file-type-csharp2" scale="4" animation="pulse" hover/>
            </div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-orange-500 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="vi-file-type-html" scale="4" animation="pulse" hover/>
            </div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-blue-400 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="vi-file-type-css" scale="4" animation="pulse" hover/>
            </div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-yellow-300 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="co-javascript" scale="4" animation="pulse" fill="yellow" hover/>
            </div>
        </div>
        <div class="items-center text-white text-2xl bolder"># Frameworks & Tools</div>
        <hr class="border-purple-400 border-y-2 mt-2 mb-2 rounded-xl"/>
        <div class="lg:flex lg:flex-row min-[320px]:grid min-[320px]:grid-flow-col min-[320px]:grid-cols-2 min-[320px]:grid-rows-3 min-[320px]:w-full">
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-green-400 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="vi-file-type-vue" scale="4" animation="pulse" hover/></div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-cyan-400 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="si-tailwindcss" scale="4" animation="pulse" fill="cyan" hover/></div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-white border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="si-threedotjs" scale="4" animation="pulse" fill="white" hover/></div>
            <div class="p-2 mt-1 ml-5 lg:w-[104px] acrylic border-purple-700 border-4 rounded bg-slate-900 min-[320px]:flex min-[320px]:justify-center min-[320px]:items-center min-[320px]:w-9/12 min-[320px]:mb-1.5"><v-icon name="co-dot-net" scale="4" animation="pulse" inverse hover/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TypeIt from "typeit";

export default {
    name: "HomePage",
    components: {
    },
    mounted() {
        this.$nextTick(() => {
            const welcomeMsg = document.querySelector("#welcomeMsg");

            if (welcomeMsg) {

                welcomeMsg.innerHTML = '';

                new TypeIt(welcomeMsg, {
                strings: "Hi, I am a developer  based in Denmark.",
                speed: 75,
                loop: false,
                }).go();
            } else {
                console.error("Element with ID 'welcomeMsg' not found.");
            }
        });
  }
}
</script>

<style>
* {
  font-family: "Archivo";
}
</style>