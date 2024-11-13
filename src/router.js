import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CompaniesPage from '@/pages/CompaniesPage.vue';
import ArticlePage from '@/pages/ArticlePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/articulo',
        name: 'ArticlePage',
        component: ArticlePage,
    },
    {
        path: '/empresa',
        name: 'CompaniesPage',
        component: CompaniesPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;