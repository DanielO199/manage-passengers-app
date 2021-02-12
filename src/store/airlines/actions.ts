import { Commit } from 'vuex';

import { airlineApi } from '@/api/airlineApi';

import { FETCH_AIRLINES, SET_LOADING, SET_AIRLINES } from './types';

export default {
	async [FETCH_AIRLINES]({ commit }: { commit: Commit }, params?: any) {
		commit(SET_LOADING, true);
		const response = await airlineApi.list(params);
		commit(SET_LOADING, false);
		commit(SET_AIRLINES, response);
	}
};
