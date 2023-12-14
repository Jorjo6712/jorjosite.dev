<template>
    <div class="flex justify-center items-center max-w-lg max-h-lg mx-auto mt-40" >
        <Renderer ref="renderer" orbit-ctrl :antialias="true"  class="rounded w-full h-full">
        <Camera :position="{x: 5 , y: 100 , z: 5 }" />
        <Scene background="#202023">
        <AmbientLight color={0xffffff} intensity={100} />
        <GltfModel ref=""
                src="scene.gltf"
                @load="onReady"
                @progress="onProgress"
                @error="onError"
        />
        </Scene>
        </Renderer>
    </div>
    <HeadinG/>
</template>

<script>
import HeadinG from './Heading.vue'

export default {
    name: "HomePage",
    components: {
        HeadinG
    },
}


</script>

<style>

</style>