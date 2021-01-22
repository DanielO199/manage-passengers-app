export default {
	isLoading(state: any) {
		return state.isLoading;
	},
	passengers(state: any) {
		return state.passengers;
	},
	totalRecords(state: any) {
		return state.totalRecords;
	},
	hasPassengers(state: any) {
		return state.passengers && state.passengers.length > 0;
	}
};
