import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Projects from './components/Projects.vue'
import OtherDot from './components/OtherDot.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Projects', component: Projects },
        { path: '/Other', component: OtherDot},
        { path: '/', component: App },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

