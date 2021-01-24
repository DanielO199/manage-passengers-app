import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			passengers: [],
			passenger: null,
			totalRecords: null,
			isLoading: false,
			isLoadingAction: false
		};
	},
	mutations,
	actions,
	getters
};
