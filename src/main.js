/* Vue Imports */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

/* Icon Imports */
import { BiGithub } from "oh-vue-icons/icons"
import { BiHouseFill } from "oh-vue-icons/icons"
import { MdMorehoriz } from 'oh-vue-icons/icons'
import { FaCode } from "oh-vue-icons/icons"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { GiHamburgerMenu } from "oh-vue-icons/icons"
import { FaRegularWindowClose } from "oh-vue-icons/icons"
import { ViFileTypeVue } from "oh-vue-icons/icons"
import { CoDotNet } from "oh-vue-icons/icons"
import { ViFileTypeCsharp2 } from "oh-vue-icons/icons"
import { SiTailwindcss } from "oh-vue-icons/icons"
import { SiThreedotjs } from "oh-vue-icons/icons"
import { ViFileTypePython } from "oh-vue-icons/icons"
import { ViFileTypeHtml } from "oh-vue-icons/icons"
import { ViFileTypeCss } from "oh-vue-icons/icons"
import { CoJavascript } from "oh-vue-icons/icons"
import { BiEmojiSmileUpsideDownFill } from "oh-vue-icons/icons"
import { ViFileTypeReactjs } from "oh-vue-icons/icons"

/* Other Imports */

/* Component Imports */
import App from './App.vue'
import HomePage from './components/Home.vue'
import Projects from './components/Projects.vue'
import OtherDot from './components/OtherDot.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Projects', component: Projects },
        { path: '/Other', component: OtherDot},
        { path: '/', component: HomePage},
    ]
});

addIcons(
    BiEmojiSmileUpsideDownFill,
    BiGithub, 
    BiHouseFill, 
    MdMorehoriz, 
    FaCode, 
    GiHamburgerMenu, 
    ViFileTypeVue,
    CoDotNet,
    ViFileTypeCsharp2,
    SiTailwindcss,
    SiThreedotjs,
    ViFileTypePython,
    ViFileTypeHtml,
    ViFileTypeCss,
    CoJavascript,
    FaRegularWindowClose,
    ViFileTypeReactjs
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.use(router);
app.mount('#app');

