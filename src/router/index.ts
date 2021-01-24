import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/passengers',
		name: 'Passengers',
		component: () => import('@/views/Passengers.vue')
	},
	{
		path: '/passenger/:id',
		name: 'Passenger Details',
		props: true,
		component: () => import('@/views/PassengerDetails.vue')
	},
	{
		path: '/airlines',
		name: 'Airlines',
		component: () => import('@/views/Airlines.vue')
	},
	{
		path: '/:notFound(.*)',
		name: 'Not found',
		component: () => import('@/views/NotFound.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
