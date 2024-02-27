<template>
<div>
    <form @submit.prevent="postComment"  class="flex flex-col justify-center items-center gap-4 mb-4">
      <input v-model="newComment.data.author" placeholder="Author" class="bg-gray-900 shadow shadow-black text-white focus:outline-none rounded-lg p-2" />
      <textarea v-model="newComment.data.message" maxlength="1000" placeholder="comment" class="bg-gray-900 shadow shadow-black text-white resize-none focus:outline-none rounded-lg w-5/12 p-4 h-4/12" ></textarea>
      <button @click.prevent="postComment()"  class="rounded-2xl focus:outline-none focus:ring-0 focus:ring-offset-2 text-white dark:hover:bg-white hover:text-black hover:transition ease-in-out duration-300 px-6 py-3 inline-flex justify-center items-center">Add Comment</button>
    </form>
    <div class="flex ml-46">
      <ul>
        <li class="flex flex-col w-full flex-wrap justify-center items-center gap-4">
          <div class="lg:flex lg:w-7/12 lg:h-3/12 min-[320px]:h-1/12 min-[320px]:w-10/12 bg-gray-900 shadow shadow-black rounded-md" v-for="comment in comments.data" :key="comment.id" data-test="comment">
            <div class="p-3">
                <div class="flex gap-3">
                    <h3 class="text-white">
                        {{ comment.author }}:
                        <br>
                    </h3> 
                  <p class="text-gray-300">
                  {{ comment.message }}
                  </p>
                  <p class="text-gray-300">
                  {{ comment.timestamp }}
                  </p>
                </div>
                <button class="text-right text-blue-500">Reply</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
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

    const newComment = reactive({
      data: { author: '', message: '', timestamp: '' },
    })

    const getComments = async () => {
      try {
        const response = await axios.get('http://172.18.100.113:3000/comments')
        comments.data = response.data
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    const postComment = async () => {
      
      try {
        await axios.post('http://172.18.100.113:3000/comments', {
          author: newComment.data.author,
          message: newComment.data.message,
          timestamp: new Date(),
        })

        newComment.data.author = ''
        newComment.data.message = ''
        newComment.data.timestamp = ''

        getComments()

      } catch (error) {
        console.error('Error posting comment:', error)
      }
    }

    // When component is first mounted, await for the api to try and fetch the comments data 
    // and store it inside the reactive comments object

    onMounted(
      getComments
    )

    setInterval(getComments, 5000)

    return { comments, newComment, postComment, }
  },
}
</script>