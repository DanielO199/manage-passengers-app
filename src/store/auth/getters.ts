import { AuthState } from './interfaces';

export default {
	isLoading(state: AuthState) {
		return state.isLoading;
	},
	isAuthenticated(state: AuthState) {
		return !!state.accessToken;
	},
	accessToken(state: AuthState) {
		return state.accessToken;
	}
};
