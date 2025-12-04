import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../pages/OverviewPage.vue'
import InputTransactionsPage from '../pages/InputTransactionsPage.vue'
import MoneyAnalysisPage from '../pages/MoneyAnalysisPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'

const routes = [
    { path: '/', redirect: '/overview' },
    { path: '/overview', name: 'Overview', component: OverviewPage },
    { path: '/input', name: 'InputTransactions', component: InputTransactionsPage },
    { path: '/analysis', name: 'MoneyAnalysis', component: MoneyAnalysisPage },
    { path: '/resources', name: 'Resources', component: ResourcesPage }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
