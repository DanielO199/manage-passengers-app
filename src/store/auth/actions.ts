import { authApi } from '@/api/authApi';
import router from '@/router';

let timer: any;

export default {
	async login(context: any, data: any) {
		context.commit('setLoading', true);
		let response;
		try {
			response = await authApi.login(data);
			router.push('/airlines');
			console.log(response);
			localStorage.setItem('access_token', response.access_token);
			localStorage.setItem('expires_in', response.expires_in);

			timer = setTimeout(function() {
				context.dispatch('logout');
			}, response.expires_in * 1000);

			context.commit('setUser', response);
		} catch (error) {
			console.log(error);
		}

		context.commit('setLoading', false);
		return response;
	},

	logout(context: any) {
		localStorage.removeItem('access_token');
		localStorage.removeItem('expires_in');

		clearTimeout(timer);
		router.push('/');
		context.commit('setUser', {
			accessToken: null,
			userId: null
		});
	}
};
