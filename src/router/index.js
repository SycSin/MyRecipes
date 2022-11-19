import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Kategorien',
        component: () => import("@/views/Category.vue"),
    },
    {
        path: '/recipe/:id',
        name: 'Rezepte',
        component: () => import("@/views/Recipe.vue"),
    },
    {
        path: '/authors',
        name: 'authoren',
        component: () => import("@/views/Authors.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/signup',
        name: 'Registrieren',
        component: () => import("@/views/Signup.vue"),
    },
    {
        path: '/profile',
        name: 'Profil',
        component: () => import("@/views/Profile.vue")
    }
]



const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
