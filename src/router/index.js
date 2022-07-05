/*
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:42:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-05 10:01:26
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
        components: {
            header: NavBar,
            other: HomePage,
            footer: Footer
        }
    },
    {
        name:"Essay",
        path: '/essay',
        components: {
            header: NavBar,
            other: Essay,
            footer: Footer
        }
    },
    {
        name:"Message",
        path: '/message',
        components: {
            header: NavBar,
            other: Message,
            footer: Footer
        }
    },
    {
        name:"Project",
        path: '/project',
        components: {
            header: NavBar,
            other: Project,
            footer: Footer
        }
    },
    {
        name:"About",
        path:"/about",
        components: {
            header: NavBar,
            other: About,
            footer: Footer
        }
    },
    {
        name:"Login",
        path:"/login",
        components: {
            header: NavBar,
            other: Login,
            footer: Footer
        }
    },
    //以下是管理员面板
    {
        name:"Admin",
        path:"/admin",
        components: {
            header: NavBar,
            other: Admin,
            footer: Footer
        },
        children:[
            {
                name:'AdminUserFrom',
                path:"userForm",
                component:UserFrom

            }
        ]
    },

    // 单个文章的路由
    // 传递文章ID进去
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
]


// 解决：重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    routes
})


// 前置路由，用于拦截路由请求
router.beforeEach((to, from, next) => {
    // 判断是否登录
    if (to.path === "/"){
        return next()
    }
    if (localStorage.getItem("loginStatus") !== 'ok'){
        console.log("请先登录/注册");
        if (to.path !== '/login') {
            return next("/login");
        }
    }
    // 判断是否是进入了管理员界面
    if (to.path === "/admin"){
        if(localStorage.getItem("adminStatus") !== 'ok'){
            console.log("宁没有管理员权限，快点爬");
            return next("/home")
        }
    }
    next()
})


Vue.use(VueRouter)
export default router
