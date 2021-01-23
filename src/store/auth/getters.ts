export default {
	isLoading(state: any) {
		return state.isLoading;
	},
	isAuthenticated(state: any) {
		return !!state.token;
	}
};
