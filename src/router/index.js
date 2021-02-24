import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Documents from '../views/Documents'
import Contacts from "@/views/Contacts";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
