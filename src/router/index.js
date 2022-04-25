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
                component: () => import('@/components/HelloWorld'),
            },
            {
                path: '/top',
                component: () => import('@/components/Top'),
            }
        ]
    }
)

export default router
