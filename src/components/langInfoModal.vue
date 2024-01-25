<template>
<div class="fixed inset-0 overflow-y-auto w-full">
    <div class="flex items-center justify-center h-4/5 w-52">
        <div class="fixed flex justify-center items-center inset-0 bg-transparent w-full">
            <div class="bg-gray-900 flex justify-center item-center border-purple-300 border-4 p-4 rounded-xl shadow-md">
                <div class="mb-4 float-start">
                    <button @click="this.toggleModal" class="text-gray-600 hover:text-red-500 hover:border-gray-700 focus:outline-none border-gray-600 mb-4">
                        <v-icon name="fa-regular-window-close" scale="1.5"/>
                    </button>
                    <h2 class="text-2xl text-white font-bold">{{ modalHeader }}</h2>
                </div>
                <div class="ml-32 w-3/4 h-2/4 mt-12 ">
                    <VCodeBlock
                        prismjs
                        :code=textContent
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
  data() {
    return {
      localLangName: this.langName,
      localToggleModal: this.toggleModal(), 
      textContent: "",
      modalHeader: "",
    };
  },
  watch: {
    langName(val) {
      this.localLangName = val;
      this.infoBasedOnLang(this.localLangName);
    },
    toggleModal(val) {
      this.localToggleModal = val;
    },
  },
  methods: {
    infoBasedOnLang(localLangName) {
      switch (localLangName) {
        case 'python':
          this.modalHeader = langs.python.modalHeader;
          this.textContent = langs.python.textContent;
          break;
        case 'csharp':
          this.modalHeader = langs.csharp.modalHeader;
          this.textContent = langs.csharp.textContent;
          break;
        case 'html':
          this.modalHeader = langs.html.modalHeader;
          this.textContent = langs.html.textContent;
          break;
        case 'css':
          this.modalHeader = langs.css.modalHeader;
          this.textContent = langs.css.textContent;
          break;
        case 'javascript':
          this.modalHeader = langs.javascript.modalHeader;
          this.textContent = langs.javascript.textContent;
          break;
        default:
          this.textContent = "language not recognized";
          break;
      }
    },
  },
};
</script>

<style scoped>

</style>