import { createRouter, createHistory, createWebHashHistory } from 'vue-router'
import HomeViewVue from './HomeView.vue'
import Home from './HomeView.vue'
import SearchBar from './SearchBar.vue'

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomeViewVue
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router