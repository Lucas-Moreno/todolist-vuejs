import { createRouter, createWebHistory } from "vue-router"

import TodoList from '../components/TodoList.vue'
import Api from '../components/JsonTypeApiRequest.vue'
import NotFound from '../components/NotFound.vue'
import ScriptSetupTest from '../components/scriptSetupTest.vue'
import GraphqlTest from '../components/GraphqlTest.vue'

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
    path: '/scriptSetup',
    component: ScriptSetupTest
  },
  {
    path: '/querygraphql',
    component: GraphqlTest
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