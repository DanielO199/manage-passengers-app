import { request } from './request';

export const api = {
	get: function(url: any, query?: any) {
		const config = {
			query
		};

		// if (cancelToken) {
		// 	config['cancelToken'] = cancelToken;
		// }

		return request(url, config);
	},
	post: function(url: any, payload: any) {
		return request(url, {
			method: 'POST',
			data: payload
		});
	},
	put: function(url: any, payload: any) {
		return request(url, {
			method: 'PUT',
			data: payload
		});
	},
	delete: function(url: any) {
		return request(url, { method: 'DELETE' });
	}
};
