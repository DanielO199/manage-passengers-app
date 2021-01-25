export default {
	setLoading(state: any, payload: any) {
		state.isLoading = payload;
	},
	setUser(state: any, payload: any) {
		state.accessToken = payload.access_token;
	}
};
