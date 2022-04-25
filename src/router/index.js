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
                component: () => import('@/view/index'),
            },
            {
                path: '/top',
                component: () => import('@/components/Top'),
            },
            {
                path : '/head',
                component: () => import('@/components/Head'),
            }
        ]
    }
)

export default router
