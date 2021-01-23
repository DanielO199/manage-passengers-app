import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			token: 'ddsa',
			userId: null,
			isLoading: false
		};
	},
	mutations,
	actions,
	getters
};
