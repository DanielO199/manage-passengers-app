import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
	namespaced: true,
	state() {
		return {
			accessToken: localStorage.getItem('access_token'),
			userId: null,
			isLoading: false
		};
	},
	mutations,
	actions,
	getters
};
