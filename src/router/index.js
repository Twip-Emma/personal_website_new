/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 11:17:14
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
// const Welcome = () => import(/* webpackChunkName: "Welcome" */ '@/views/Welcome')

// 首页
import Main from '@/components/Homepage/Homepage'
import NavBar from '@/components/Blog/components/changeless/NavBar'
import Footer from '@/components/Blog/components/changeless/Footer'

// 博客首页
// import BlogMain from '@/components/Blog/BlogMain'

// 普通用户相关组件
import HomePage from '@/components/Blog/views/HomePage'
import Essay from '@/components/Blog/views/Essay'
import Message from '@/components/Blog/views/Message'
import Project from '@/components/Blog/views/Project'
import About from '@/components/Blog/views/About'
import BlogInfo from '@/components/Blog/components/index/BlogInfo'
import Login from '@/components/Blog/components/login/Login'

// 管理员相关组件
import Admin from '@/components/Blog/views/Admin'
import UserFrom from '@/components/Blog/components/admin/UserFrom'

const routes = [
    // {
    //     path: '/error',
    //     component: Error
    // },
    {
        path: '/',
        component: Main,
    },
    {
        name:"HomePage",
        path: '/home',
        component: HomePage,
    },
    {
        name:"Essay",
        path: '/essay',
        components: {
            header: NavBar,
            default: Essay,
            footer: Footer
        }
    },
    {
        name:"Message",
        path: '/message',
        component:Message
    },
    {
        name:"Project",
        path: '/project',
        component:Project
    },
    {
        name:"About",
        path:"/about",
        component:About
    },
    {
        name:"BlogInfo",
        path:"/bloginfo",
        component:BlogInfo,
        props(route){
            return {
                id: route.query.id
            }
        }
    },
    {
        name:"Login",
        path:"/login",
        component:Login
    },
    //以下是管理员面板
    {
        name:"Admin",
        path:"/admin",
        component:Admin,
        children:[
            {
                name:'AdminUserFrom',
                path:"userForm",
                component:UserFrom

            }
        ]
    }
]


// 解决：重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  
    return originalPush.call(this, location).catch(err => err)
}



const router = new VueRouter({
    routes
})
Vue.use(VueRouter)
export default router
