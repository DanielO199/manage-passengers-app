import { AuthState } from './interfaces';

export default {
	setLoading(state: AuthState, payload: boolean) {
		state.isLoading = payload;
	},
	setUser(state: AuthState, payload: any) {
		state.accessToken = payload.access_token;
	}
};
