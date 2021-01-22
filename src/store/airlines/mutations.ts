export default {
	setLoading(state: any, payload: any) {
		state.isLoading = payload;
	},
	setAirlines(state: any, payload: any) {
		state.airlines = payload;
	},
	setFetchTimestamp(state: any) {
		state.lastFetch = new Date().getTime();
	}
};
