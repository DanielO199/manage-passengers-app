import { Commit } from 'vuex';

import { airlineApi } from '@/api/airlineApi';

export default {
	async fetchAirlines({ commit }: { commit: Commit }, params?: any) {
		commit('setLoading', true);
		const response = await airlineApi.list(params);
		commit('setLoading', false);
		commit('setAirlines', response);
	}
};
