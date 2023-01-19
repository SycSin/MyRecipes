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
        name: 'Categories',
        component: () => import("@/views/Category.vue"),
    },
    {
        path: '/recipes/:id',
        name: 'Recipes',
        component: () => import("@/views/Recipe.vue"),
    },
    {
        path: '/authors',
        name: 'Authors',
        component: () => import("@/views/Authors.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: () => import("@/views/Signup.vue"),
    },
    {
        path: '/profile',
        name: 'Profile',
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
