/* eslint-disable @typescript-eslint/camelcase */
import { ActionContext } from 'vuex';
import { AuthState } from './interfaces';

import { authApi } from '@/api/authApi';
import router from '@/router';

let timer: number;

export default {
	async login(context: ActionContext<AuthState, AuthState>, data: any) {
		context.commit('setLoading', true);
		let response;
		try {
			response = await authApi.login(data);
			router.push('/airlines');

			const expirationDate = new Date().getTime() + response.expires_in * 1000;
			localStorage.setItem('access_token', response.access_token);
			localStorage.setItem('expires_in', response.expires_in);
			localStorage.setItem('expiration_date', expirationDate.toString());

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
	tryLogin(context: ActionContext<AuthState, AuthState>) {
		const access_token = localStorage.getItem('access_token');
		const expiration_date = localStorage.getItem('expiration_date');

		let expiresIn = -1;
		if (expiration_date) expiresIn = +expiration_date - new Date().getTime();

		if (expiresIn < 0) {
			return;
		}

		timer = setTimeout(function() {
			context.dispatch('logout');
		}, expiresIn);

		if (access_token) {
			context.commit('setUser', {
				access_token
			});
		}
	},

	logout(context: ActionContext<AuthState, AuthState>) {
		localStorage.removeItem('access_token');
		localStorage.removeItem('expires_in');
		localStorage.removeItem('expiration_date');

		clearTimeout(timer);
		router.push('/');
		context.commit('setUser', {
			accessToken: null,
			userId: null
		});
	}
};
