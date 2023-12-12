import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { BiGithub } from "oh-vue-icons/icons"
import { BiHouseFill } from "oh-vue-icons/icons"
import { MdMorehoriz } from 'oh-vue-icons/icons'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import App from './App.vue'
import HomePage from './components/Home'
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

addIcons(BiGithub, BiHouseFill, MdMorehoriz);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount('#app');

