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
        path: '/article',
        name: 'ArticlePage',
        component: ArticlePage,
    },
    {
        path: '/companies',
        name: 'CompaniesPage',
        component: CompaniesPage,
    },
];

console.log('Routes:', routes); // Verifique as rotas configuradas

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;