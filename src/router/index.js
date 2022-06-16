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
        path: '/recipe',
        name: 'Rezepte',
        component: () => import("@/views/Recipe.vue"),
    },
    {
        path: '/authors',
        name: 'authoren',
        component: () => import("@/views/Authors.vue"),
    },
    {
        path: '/planner',
        name: 'Planner',
        component: () => import("@/views/Planner.vue"),
    },
    //{
    //    path: '/planner-old',
    //    name: 'PlannerOld',
    //    component: () => import("@/views/Planner-bkup.vue"),
    //},
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
        path: '/createRecipe',
        name: 'Rezept erstellen',
        component: () => import("@/views/CreateRecipe.vue"),
    }
]



const router = new VueRouter({
    routes,
    scrollBehavior() {
        document.getElementById('planner').scrollIntoView();
    }
})

export default router
