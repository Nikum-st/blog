export const getData = async (endpoint) => {
	try {
		const response = await fetch(`http://localhost:3005/${endpoint}`);
		if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`);
		}

		const result = await response.json();

		return result;
	} catch (error) {
		console.error(`Невозможно получить данные с сервера: ${error}`);
		throw error;
	}
};
