import axios from 'axios';

export const authApi = {
	login: function(data?: any) {
		return axios.post(
			'https://dev-457931.okta.com/oauth2/aushd4c95QtFHsfWt4x6/v1/token',
			data
		);
	}
};
