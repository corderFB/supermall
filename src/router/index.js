import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
const Category = () => import('@/views/Category')
const ShopCart = () => import('@/views/ShopCart')
const Profile = () => import('@/views/Profile')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
	{
	  path: '/shopCart',
	  name: 'ShopCart',
	  component: ShopCart
	},
	{
	  path: '/profile',
	  name: 'Profile',
	  component: Profile
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
