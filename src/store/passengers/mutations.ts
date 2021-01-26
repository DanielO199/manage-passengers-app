import { PassengersState } from './interfaces';

export default {
	setLoading(state: PassengersState, payload: boolean) {
		state.isLoading = payload;
	},
	setLoadingAction(state: PassengersState, payload: boolean) {
		state.isLoadingAction = payload;
	},
	setPassengers(state: PassengersState, payload: any) {
		state.passengers = payload;
	},
	setPassenger(state: PassengersState, payload: any) {
		state.passenger = payload;
	},
	setTotalRecords(state: PassengersState, payload: number) {
		state.totalRecords = payload;
	}
};
