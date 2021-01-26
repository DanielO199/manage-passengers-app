import { Commit } from 'vuex';
import { UpdatePassenger, Params } from './interfaces';

import { passengerApi } from '@/api/passengerApi';

export default {
	async fetchPassengers({ commit }: { commit: Commit }, params: Params) {
		commit('setLoading', true);

		const response = await passengerApi.list(params);

		commit('setLoading', false);
		commit('setPassengers', response.data);
		commit('setTotalRecords', response.totalPassengers);
	},
	async fetchPassenger({ commit }: { commit: Commit }, id: number) {
		commit('setLoading', true);

		const response = await passengerApi.get(id);
		commit('setPassenger', response);
		commit('setLoading', false);
	},
	async updatePassenger({ commit }: { commit: Commit }, data: UpdatePassenger) {
		commit('setLoadingAction', true);

		await passengerApi.update(data);
		commit('setLoadingAction', false);
	}
};
