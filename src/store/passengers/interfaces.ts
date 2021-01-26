export interface PassengersState {
	passengers: [];
	passenger: object;
	totalRecords: number;
	isLoading: boolean;
	isLoadingAction: boolean;
}
export interface Params {
	page: number;
	size: number;
}

export interface UpdatePassenger {
	id: number;
	name: string;
	trips: number;
	airline: number;
}
