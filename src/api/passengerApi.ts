import { api } from './api';

const endpoint = '/passenger';

export const passengerApi = {
	list: function(params?: any) {
		return api.get(`${endpoint}`, params);
	},
	get: function(id: any, params?: any) {
		return api.get(`${endpoint}/${id}`, params);
	},
	update: function(data: any) {
		return api.put(`${endpoint}/${data.id}`, data);
	}
};
