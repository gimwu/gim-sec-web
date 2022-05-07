import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: '/index',
            },
            {
                path: '/index',
                name: '首页',
                meta: ['首页'],
                component: () => import('@/view/index'),
            },
            {
                path: '/goods-list',
                name: "商品列表",
                meta: ['商品列表'],
                component: () => import('@/view/goods-list'),
            },
            {
                path: '/goods-detail',
                meta: ['商品详情'],
                component: () => import('@/view/goods-detail'),
            },
            {
                path: '/sec-list',
                meta: ['秒杀列表'],
                component: () => import('@/view/sec-list'),
            },
            {
                path: '/sec-detail',
                meta: ['秒杀商品'],
                component: () => import('@/view/goods-detail'),
            },
            {
                path: '/cart',
                meta: ['购物车'],
                component: () => import('@/view/cart'),
            },
            {
                path: '/submit-order',
                meta: ['提交订单'],
                component: () => import('@/view/submit-order'),
            },
            {
                path: '/my-order',
                meta: ['我的订单'],
                component: () => import('@/view/myOrder'),
            },
            {
                path: '/user-center',
                meta: ['个人中心'],
                component: () => import('@/view/user-center'),
            },
            {
                path:'/admin',
                meta:['后台管理系统'],
                children:[
                    {
                        path:'/user-list',
                        meta:['用户列表'],
                        component:()=>import('@/view/admin/userList')
                    },
                    {
                        path:'/admin-goods-list',
                        meta:['商品列表'],
                        component: () => import('@/view/admin/adminGoodsList'),
                    },
                    {
                        path:'/sec-goods-list',
                        meta:['秒杀商品列表'],
                        component: () => import('@/view/admin/secGoodsList'),
                    },
                    {
                        path:'/order-list',
                        meta:['普通订单'],
                        component: () => import('@/view/admin/orderList'),
                    },
                    {
                        path:'/sec-order-list',
                        meta:['秒杀商品订单'],
                        component:()=>import('@/view/admin/secOrderList')
                    },
                    {
                        path:'/admin-list',
                        meta:['管理员列表'],
                        component:()=>import('@/view/admin/adminList')
                    }
                ],
                component:() => import('@/view/admin')
            },

        ]
    }
)

export default router
