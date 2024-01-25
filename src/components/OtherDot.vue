<template>
<div class="">
  <li class="" v-for="comment in comments" :key="comment.id" data-test="comment">
    <h1 class="">{{ comment.author }}</h1>
    <h1 class="">{{ comment.message }}</h1>
    <h1 class="">{{ comment.timestamp }}</h1>
  </li>
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
        const response = await axios.get("http://10.0.0.223:3000/comments")
        this.comments = response.data
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    },
  },
}
</script>