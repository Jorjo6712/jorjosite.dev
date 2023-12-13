<template>
<div class="flex justify-center items-center max-w-lg max-h-lg mx-auto mt-40" >
    <Renderer ref="renderer" orbit-ctrl  class="rounded w-full h-full">
    <Camera :position="{x: 4 , y: 200 , z: 1 }" />
    <Scene background="#202023">
      <PointLight :position="{x: 2, y: 10, z: 20 } " castShadow="true" />
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