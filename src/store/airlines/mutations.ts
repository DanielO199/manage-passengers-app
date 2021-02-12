import { AirlinesState } from './intefaces';

import { FETCH_AIRLINES, SET_LOADING, SET_AIRLINES } from './types';

export default {
	[SET_LOADING](state: AirlinesState, payload: boolean) {
		state.isLoading = payload;
	},
	[SET_AIRLINES](state: AirlinesState, payload: any) {
		state.airlines = payload;
	}
};
