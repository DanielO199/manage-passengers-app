import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import { PassengersState } from './interfaces';

export default {
	namespaced: true,
	state(): PassengersState {
		return {
			passengers: [],
			passenger: {},
			totalRecords: 0,
			isLoading: false,
			isLoadingAction: false
		};
	},
	mutations,
	actions,
	getters
};
