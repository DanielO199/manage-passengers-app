import { authApi } from '@/api/authApi';

export default {
	async login({ commit }: any, data: any) {
		commit('setLoading', true);
		const response = await authApi.login(data);
		commit('setLoading', false);
		commit('setUser', response);
	}
};
