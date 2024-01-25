<template>
<div class="flex justify-center items-center mt-4">
  <button class="rounded-2xl focus:outline-none focus:ring-0 focus:ring-offset-2 text-white hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-6 py-3" @click="getComments">Get comments</button>
    <div class="flex flex-row justify-center items-centerw-1/4">
    <ul class="flex-col">
      <li class="mt-4" v-for="comment in comments" :key="comment.id" data-test="comment">
        <h1 class="py-4 bg-white text-black rounded-xl mb-0.5">{{ comment.author }}</h1>
        <h1 class="py-4 bg-white text-black rounded-xl mb-0.5">{{ comment.message }}</h1>
        <h1 class="py-4 bg-white text-black rounded-xl mb-0.5">{{ comment.timestamp }}</h1>
      </li>
    </ul>
  </div>
</div>
</template>
    
<script>
import axios from 'axios'

export default {
    name: "OtherDot",
    props: {

    },
    data() {
    return {
      comments: null,
    };
  },
  methods: {
    async getComments() {
      try {
        const response = await axios.get("http://172.18.100.113:3000/comments")
        this.comments = response.data
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    },
  },
}
</script>