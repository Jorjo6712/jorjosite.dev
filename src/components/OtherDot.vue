<template>
  <div>
      <form @submit.prevent="postComment"  class="flex flex-col justify-center items-center gap-1 mt-48 mb-4 ml-16 min-[320px]:-ml-8">
        <input @click.self="readyComment" v-model="newComment.author" placeholder="Author" maxlength="20" class="bg-gray-900 shadow shadow-black text-white focus:outline-none rounded-lg p-2 lg:w-44 lg:-ml-72 min-[320px]:w-4/12 min-[320px]:mr-44"/>
        <textarea v-model="newComment.message" @click.self="readyComment" v-click-away="unreadyComment" maxlength="256" placeholder="Write your comment here..." class="bg-gray-900 shadow shadow-black text-white resize-none focus:outline-none rounded-lg lg:w-4/12 min-[320px]:mr-1 min-[320px]:w-9/12 p-4 h-4/12"/>
        <div :class="[showButton ? 'lg:flex' : 'lg:hidden', 'lg:w-5/12 lg:mr-96 justify-end mt-0.5 min-[320px]:w-3/12 min-[320px]:ml-52 min-[320px]:flex']">
            <button class="text-white bg-green-600 shadow shadow-black rounded-2xl py-1.5 px-3 mt-0.5"> Submit </button>
        </div>
      </form>
      <div class="lg:-ml-60 min-[320px]:ml-2 justify-center items-center">
        <ul>
          <Suspense>
          <template #default>
            <li v-auto-animate  class="flex flex-col w-full justify-center items-center gap-4">
              <div class="bg-gray-900 shadow shadow-black flex flex-col rounded-md p-3 lg:min-w-96 lg:max-w-96 min-[320px]:min-w-64 min-[320px]:max-w-96 min-[320px]:h-1/12 min-[320px]:w-11/12" v-for="comment in comments.value" :key="comment._id">
                  <h1 class="text-white text-base trext-wrap break-words">
                    {{ comment.author }}:
                  </h1>
                  <p class="text-gray-300 text-sm break-words">
                    {{ comment.message }}
                  </p>
                  <div class="flex justify-between mt-2">
                    <h1 class="text-gray-600 text-sm">
                        Posted: {{ comment.timestamp }}
                    </h1>
                    <button @click="toggleReplyForm(comment)" class="text-blue-500"> Reply </button>
                  </div>
                  <ul v-if="comment.showReplyForm">
                    <li>
                      <textarea v-model="comment.replyText" placeholder="Write your reply here" class="bg-gray-900 shadow shadow-black text-white resize-none focus:outline-none rounded-lg p-2 mt-2"></textarea>
                      <button @click="submitReply(comment)" class="text-white bg-green-600 shadow shadow-black rounded-2xl py-1.5 px-3 mt-0.5">Submit</button>
                    </li>
                  </ul>
              </div>
            </li>
        </template>
        <template #fallback>
          <p>Loading...</p>
        </template>
        </Suspense>
        </ul>
      </div>
      <div class="flex justify-center items-center mt-16"> 
        <p class="text-neutral-400 hidden italic text-sm underline"> 
          As a guest, your comments will only be available for 
          <br>
          30 days or less as their identifier is cached.
          <br>
          Register or login to make a persistent comment.
        </p>
      </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { ref, reactive, onMounted, Suspense } from 'vue'
  import { required } from '@vuelidate/validators'
  import useVuelidate from '@vuelidate/core'
  
  export default {
    name: "OtherDot",
    props: {},
    components: {
      Suspense
    },
    setup() {
      
      let KEY = process.env.VUE_APP_KEY

      let comments = reactive([])
      
      let showButton = ref(false)
    
      axios.defaults.headers.common['X-Key'] = KEY
  
      const newComment = reactive({
         author: '',
         message: '', 
         timestamp: '' 
      })
  
      const commentRules = {
          author : { required },
          message : { required },
      }

      const timeOptions = { day: '2-digit', month: '2-digit', year: 'numeric' }
  
      const v$ = useVuelidate(commentRules, newComment)

      const readyComment = () => (showButton.value = true)

      const unreadyComment = () => (showButton.value = false)

      const addReply = (comment, reply) => {
        comment.replies.push(reply)
      }

      const toggleReplyForm = (comment) => {
        comment.showReplyForm = !comment.showReplyForm
      }

      const submitReply = async (comment) => {
        try {
          const reply = {
            author: newComment.author,
            message: comment.replyText,
            timestamp: new Date().toLocaleString('en-GB', timeOptions),
          }
          await axios.post(`http://172.18.100.25:56041/comments/${comment._id}/replies`, reply)
          addReply(comment, reply)
          comment.replyText = ''
          comment.showReplyForm = false
        } catch (error) {
          console.error('Error posting reply:', error)
        }
      }
  
      const getComments = async () => {
        try {
          const response = await axios.get('http://172.18.100.25:56041/comments')
          comments.value = response.data.comments
        } catch (error) {
          console.error('Error fetching comments:', error)
        }
      }
  
      const postComment = async () => {
        try {
          const postDetails = async () => { await axios.post('http://172.18.100.25:56041/comments', {
            author: newComment.author,
            message: newComment.message,
            timestamp: new Date().toLocaleString('en-GB', timeOptions),
          })}
  
          await (await v$.value.$validate() ? postDetails().then(getComments) : alert("Please fill out the from before submitting!"))
  
          newComment.author = ''
          newComment.message = ''
  
        } catch (error) {
          console.error('Error posting comment:', error);
        }
      }
  
      // When component is first mounted, await for the api to try and fetch the comments data 
      // and store it inside the reactive comments object
      onMounted(
        getComments
      )
  
      setInterval(getComments, 30000)
  
      return { comments, newComment, postComment, readyComment, unreadyComment, showButton, addReply, toggleReplyForm, submitReply }
    },
  }
  </script>