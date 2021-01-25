import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			accessToken: '43e',
			userId: null,
			isLoading: false
		};
	},
	mutations,
	actions,
	getters
};
