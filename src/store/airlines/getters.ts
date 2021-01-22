export default {
	isLoading(state: any) {
		return state.isLoading;
	},
	airlines(state: any) {
		return state.airlines;
	},
	hasAirlines(state: any) {
		return state.airlines && state.airlines.length > 0;
	}
};
