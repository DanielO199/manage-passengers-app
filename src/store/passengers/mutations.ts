export default {
	setLoading(state: any, payload: any) {
		state.isLoading = payload;
	},
	setPassengers(state: any, payload: any) {
		state.passengers = payload;
	},
	setPassenger(state: any, payload: any) {
		state.passenger = payload;
	},
	setTotalRecords(state: any, payload: any) {
		state.totalRecords = payload;
	},
	setFetchTimestamp(state: any) {
		state.lastFetch = new Date().getTime();
	}
};
