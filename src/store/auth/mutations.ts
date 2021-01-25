export default {
	setUser(state: any, payload: any) {
		state.accessToken = payload.access_token;
		// state.userId = payload.userId;
	}
};
