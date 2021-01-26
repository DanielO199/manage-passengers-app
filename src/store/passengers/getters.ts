import { PassengersState } from './interfaces';

export default {
	isLoading(state: PassengersState) {
		return state.isLoading;
	},
	isLoadingAction(state: PassengersState) {
		return state.isLoadingAction;
	},
	passengers(state: PassengersState) {
		return state.passengers;
	},
	passenger(state: PassengersState) {
		return state.passenger;
	},
	totalRecords(state: PassengersState) {
		return state.totalRecords;
	}
};
