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
            }
        ]
    }
)

export default router
