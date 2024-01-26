<template>
<div class="">
  <li class="" v-for="comment in comments" :key="comment.id" data-test="comment">
    <h1 class="">{{ comment.author }}</h1>
    <h1 class="">{{ comment.message }}</h1>
    <h1 class="">{{ comment.timestamp }}</h1>
  </li>
  <input onsubmit=""/>
  <input onsubmit=""/>
</div>
</template>
    
<script>
import axios from 'axios'
import { onMounted }  from 'vue'

export default {
    name: "OtherDot",
    props: {

    },
    setup() {
      
      let comments = {}
      
      onMounted(() => {
         getComments()
      });

     const getComments = () => {
        try {
          const response = axios.get("http://172.18.100.113:3000/comments")
          this.comments = response.data
        } catch (error) {
          console.error('Error fetching comments:', error)
        }
      };

      return {comments, getComments}
    }
}
</script>