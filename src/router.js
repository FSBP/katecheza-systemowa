import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./modules/main/pages/Main.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./modules/about/pages/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./modules/contact/pages/Contact.vue')
    },
    {
        path: '/course',
        name: 'course',
        component: () => import('./modules/course/pages/Course.vue')
    },
    {
        path: '/materials',
        name: 'materials',
        component: () => import('./modules/materials/pages/Materials.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('./modules/news/pages/News.vue')
    },
    {
        path: '/otks',
        name: 'otks',
        component: () => import('./modules/otks/pages/Otks.vue')
    },
    {
        path: '/rating',
        name: 'rating',
        component: () => import('./modules/rating/pages/Rating.vue')
    },
    {
        path: '/systemic-catechesis',
        name: 'systemic-catechesis',
        component: () => import('./modules/systemic-catechesis/pages/SystemicCatechesis.vue')
    },
    {
        path: '/workshops',
        name: 'workshops',
        component: () => import('./modules/workshops/pages/WorkShops.vue'),
    },
    {
        path: '/gallery',
        name: 'gallery',
        beforeEnter() { window.open('https://www.google.com/maps/@52.4010064,16.920086,17z?hl=pl-PL', '_blank') }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
