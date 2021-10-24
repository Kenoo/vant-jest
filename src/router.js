/**
 * 路由设置，具体可参考
 * @link https://v3.vuejs.org/guide/routing.html#simple-routing-from-scratch
 *
 * 例子：
 * @link https://github.com/youzan/vant-demo/tree/master/vant/vue3
 */

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        name: 'notFound',
        path: '/:path(.*)+',
        redirect: {
            name: 'not_found',
        },
    },
    {
        name: 'not_found',
        component: () => import('./view/home/index.vue'),
    },
    {
        name: 'user',
        path: '/user',
        component: () => import('./view/center/user/index.vue'),
        meta: {
            title: '个人中心',
        },
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('./view/home/index.vue'),
        meta: {
            title: '家人',
        },
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export default router;
