import { AirlinesState } from './intefaces';

export default {
	isLoading(state: AirlinesState) {
		return state.isLoading;
	},
	airlines(state: AirlinesState) {
		return state.airlines;
	}
};
