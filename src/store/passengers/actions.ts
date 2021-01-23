import { passengerApi } from '@/api/passengerApi';

export default {
	async fetchPassengers({ commit }: any, params: any) {
		commit('setLoading', true);

		const response = await passengerApi.list(params);

		commit('setLoading', false);
		commit('setPassengers', response.data);
		commit('setTotalRecords', response.totalPassengers);
	},
	async fetchPassenger({ commit }: any, id: any) {
		commit('setLoading', true);

		const response = await passengerApi.get(id);
		commit('setPassenger', response);
		commit('setLoading', false);
	}
};
