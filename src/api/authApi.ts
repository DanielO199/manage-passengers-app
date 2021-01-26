export const authApi = {
	login: async function(data: any) {
		const endpoint =
			'https://manage-passengers-api.herokuapp.com/api/users/login';

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (response.status === 200) return response.json();
		throw Error(response.statusText);
	}
};
