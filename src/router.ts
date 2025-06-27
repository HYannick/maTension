import {createRouter, createWebHistory} from 'vue-router'

import CreateLogView from './views/CreateLogView.vue'
import HistoryView from './views/HistoryView.vue'

const routes = [
  { path: '/', component: CreateLogView },
  { path: '/history', component: HistoryView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})