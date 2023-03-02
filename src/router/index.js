
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/login/login.vue'
import program from '@/views/program/program.vue'
const routes=[
{
path:'/',
name:'home',
component:Home,
},  
{
    path:'/login',
    name:'login',
    component:Login
},
{
path:'/program',
name:'program',
component:program
},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;