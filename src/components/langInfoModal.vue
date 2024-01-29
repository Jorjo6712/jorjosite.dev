<template>
<div class="fixed inset-0 overflow-y-auto w-full">
    <div class="flex items-center justify-center h-4/5 w-52">
        <div class="fixed flex justify-center items-center inset-0 bg-transparent w-full">
            <div class="bg-gray-900 flex justify-center item-center border-purple-300 border-4 p-4 rounded-xl shadow-md">
                <div class="mb-4 float-start">
                    <button @click="toggleModal" class="text-gray-600 hover:text-red-500 hover:border-gray-700 focus:outline-none border-gray-600 mb-4">
                        <v-icon name="fa-regular-window-close" scale="1.5"/>
                    </button>
                    <h2 class="text-2xl text-white font-bold">{{  state.modalHeader }}</h2>
                </div>
                <div class="ml-32 w-3/4 h-2/4 mt-12 ">
                    <VCodeBlock
                        prismjs
                        :code="state.textContent"
                        :lang=localLangName
                    />
                    <div ref="code" name="placeholder"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { reactive, watch } from 'vue'

// eslint-disable-next-line
import Prism from 'prismjs'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-python'
import langs from '../data/langs'

export default {
  name: "langInfoModal",
  props: {
    langName: String,
    toggleModal: Function,
  },
  setup(props) {
    
    const state = reactive({
      textContent: null,
      modalHeader: null,
    })

    watch(() => props.langName, (val) => {
      infoBasedOnLang(val)
    })

    function infoBasedOnLang(lang) {
      console.log(lang)

      switch (lang) {
        case 'python':
          state.modalHeader = langs.python.modalHeader
          state.textContent = langs.python.textContent
          break
        case 'csharp':
          state.modalHeader = langs.csharp.modalHeader
          state.textContent = langs.csharp.textContent
          break
        case 'html':
          state.modalHeader = langs.html.modalHeader
          state.textContent = langs.html.textContent
          break
        case 'css':
          state.modalHeader = langs.css.modalHeader
          state.textContent = langs.css.textContent
          break
        case 'javascript':
          state.modalHeader = langs.javascript.modalHeader
          state.textContent = langs.javascript.textContent
          break
        default:
          state.textContent = "language not recognized"
          break
      }
    }

    return {state, infoBasedOnLang}
  },
}
</script>

<style scoped>

</style>