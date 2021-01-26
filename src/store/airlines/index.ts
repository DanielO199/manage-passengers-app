import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import { AirlinesState } from './intefaces';

export default {
	namespaced: true,
	state(): AirlinesState {
		return {
			airlines: [],
			isLoading: false
		};
	},
	mutations,
	actions,
	getters
};
