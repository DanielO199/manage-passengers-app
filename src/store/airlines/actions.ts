import { airlineApi } from '@/api/airlineApi';

export default {
	async fetchAirlines({ commit }: any, params: any) {
		commit('setLoading', true);
		const response = await airlineApi.list(params);
		commit('setLoading', false);
		commit('setPassengers', response);
	}
};
