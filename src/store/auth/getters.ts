export default {
	isLoading(state: any) {
		return state.isLoading;
	},
	isAuthenticated(state: any) {
		return !!state.accessToken;
	},
	accessToken(state: any) {
		return state.accessToken;
	}
};
