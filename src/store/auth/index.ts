import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import { AuthState } from './interfaces';

export default {
	namespaced: true,
	state(): AuthState {
		return {
			accessToken: localStorage.getItem('access_token'),
			isLoading: false
		};
	},
	mutations,
	actions,
	getters
};
