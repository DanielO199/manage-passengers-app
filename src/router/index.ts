import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/passengers',
		name: 'Passengers',
		component: () => import('@/views/Passengers.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/passenger/:id',
		name: 'Passenger Details',
		props: true,
		component: () => import('@/views/PassengerDetails.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/airlines',
		name: 'Airlines',
		component: () => import('@/views/Airlines.vue'),
		meta: { requiresAuth: true }
	},
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login.vue'),
		meta: { requiresUnauth: true }
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

router.beforeEach(function(to, _, next) {
	if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
		next({ name: 'Login' });
	} else if (to.meta.requiresUnauth && store.getters['auth/isAuthenticated']) {
		next('/airlines');
	} else {
		next();
	}
});

export default router;
