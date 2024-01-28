<template>
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.id" data-test="comment">
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
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  name: "OtherDot",
  props: {},
  setup() {
    let comments = ref({});

    onMounted(async () => {
      try {
        const response = await axios.get('http://10.0.0.223:3000/comments');
        comments.value = response.data;
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    });

    return { comments };
  },
};
</script>