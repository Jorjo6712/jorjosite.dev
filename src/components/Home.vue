<template>
<div class="flex justify-center items-center max-w-lg max-h-lg mx-auto mt-10">
    <Renderer ref="renderer" orbit-ctrl :resize="true"  class="rounded">
    <Camera :position="{x: 2 , y: 2 , z: 1 }" />
    <Scene background="#202023">
      <PointLight :position="{y: 50, z: 50 } " castShadow="true" />
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