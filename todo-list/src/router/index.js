import { createRouter, createWebHistory } from "vue-router"

import TodoList from '../components/TodoList.vue'
import Api from '../components/JsonTypeApiRequest.vue'
import NotFound from '../components/NotFound.vue'


const routes = [
  {
    path: '/',
    component: TodoList
  },
  {
    path: '/api',
    component: Api
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router