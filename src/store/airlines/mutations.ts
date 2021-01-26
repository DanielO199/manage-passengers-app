import { AirlinesState } from './intefaces';

export default {
	setLoading(state: AirlinesState, payload: boolean) {
		state.isLoading = payload;
	},
	setAirlines(state: AirlinesState, payload: any) {
		state.airlines = payload;
	}
};
