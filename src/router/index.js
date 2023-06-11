import{
    createRouter,
    createWebHashHistory
}from 'vue-router'

import index from '~/pages/index.vue'
import Notfound from '~/pages/404.vue'
import login from '~/pages/login.vue'
import person from '~/pages/person.vue'
import magic from '~/pages/magic.vue'
import dragon from '~/pages/dragon.vue'
import mine from '~/pages/mine.vue'
import create from '~/pages/create.vue'

const routes = [
{
    //默认路由
    redirect: '/login'
},{
    path:"/home",
    component:index
},{ 
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: Notfound 
},{
    path:"/login",
    component:login
}, {
    path:"/person",
    component:person
},{
    path:"/magic",
    component:magic
},{
    path:"/dragon",
    component:dragon
},{
    path:"/create",
    component:create
},{
    path:"/mine",
    component:mine
},];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router

