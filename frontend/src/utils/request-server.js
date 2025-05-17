export const request = async (endpoint, method, data) => {
	try {
		const response = await fetch(`/api/${endpoint}`, {
			method: method || 'GET',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: data ? JSON.stringify(data) : undefined,
			credentials: 'include',
		});
		if (response.status === 204) {
			return;
		}

		const result = await response?.json();
		if (!response.ok) {
			throw new Error(result.error || 'Ошибка запроса');
		}

		return result;
	} catch (error) {
		throw new Error(error.message || 'Нет связи с сервером. Попробуйте позже.');
	}
};
