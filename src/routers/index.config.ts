import { RouteConfig } from 'vue-router';
export const indexConfig: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
	},
	{
		path: '/home',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
	}
];
