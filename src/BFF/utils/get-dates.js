export const getData = (endpoint) =>
	fetch(`http://localhost:3005/${endpoint}`)
		.then((loadedDates) => loadedDates.json)
		.catch((error) =>
			console.log(` Невозможно получить данные с сервера. Ошибка:${error}`),
		);
