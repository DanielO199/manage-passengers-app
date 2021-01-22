import { api } from './api';

const endpoint = '/passenger';

export const passengerApi = {
	list: function(params?: any) {
		return api.get(`${endpoint}`, params);
	},
	get: function(id: any, params?: any) {
		return api.get(`${endpoint}/${id}`, params);
	},
	update: function(id: any, data: any) {
		return api.put(`${endpoint}/${id}`, data);
	}
};
