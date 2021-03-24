import VueCookies from 'vue-cookies';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './../views/Home.vue';
import NotFound from './../views/NotFound.vue';

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound,
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!VueCookies.isKey('token')) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath },
            });
        } else {
            next();
        }
    } else if (
        (to.name == 'login' || to.name == 'signup') &&
        VueCookies.isKey('token')
    ) {
        next({
            path: '/home',
            params: { nextUrl: to.fullPath },
        });
    } else if (VueCookies.isKey('token')) {
        next({
            path: '/home',
            params: { nextUrl: to.fullPath },
        });
    } else {
        next();
    }
});

export default router;
