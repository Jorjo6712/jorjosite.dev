<template>
  <div>
    <ul>
      <li v-for="comment in comments.data" :key="comment.id" data-test="comment">
        <h1>{{ comment.author }}</h1>
        <p>{{ comment.message }}</p>
        <p>{{ comment.timestamp }}</p>
      </li>
    </ul>
    <form @submit.prevent="addComment">
      <input v-model="newComment.author" placeholder="Author" />
      <input v-model="newComment.message" placeholder="Message" />
      <button type="submit">Add Comment</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

export default {
  name: "OtherDot",
  props: {},
  setup() {

    let comments = reactive({
      data: [],
    })

    let newComment = reactive({
      data:[],
    })

    onMounted(async () => {
      try {
        const response = await axios.get('http://172.18.100.113:3000/comments')
        comments.data = response.data
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    });

    return { comments, newComment }
  },

    const request = await axios.post('http://172.18.100.113:3000/comments')
    newComment.data = request.data
}
</script>