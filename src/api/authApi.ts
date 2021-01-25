import { api } from './api';

export const authApi = {
	login: async function(data?: any) {
		return api.post(
			'https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token',
			data
		);
	}
};
