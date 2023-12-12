<template>
    <router-view>
    <div class='w-full max-w-lg px-10 py-8 my-52 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-6'>
            <h2 class="flex flex-row flex-nowrap items-center my-8">
                <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                <span class="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                   
                </span>
                <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
            </h2>
        </div>
    </div>
    </router-view>
</template>

<script>
export default {
    name:"HeadinG"
}
</script>