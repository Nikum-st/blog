export const getData = async (endpoint) => {
	const response = await fetch(`http://localhost:3005/${endpoint}`);

	if (!response.ok) {
		const error =
			response.status === 404
				? 'Такой страницы не существует'
				: `Ошибка сервера: ${response.status}`;

		throw error;
	}

	return await response.json();
};
