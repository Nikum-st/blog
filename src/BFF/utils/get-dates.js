export const getData = (endpoint) =>
	fetch(`http://localhost:3005/${endpoint}`)
		.then((loadedDates) => loadedDates.json())
		.then((res) => {
			return res;
		})
		.catch((error) => {
			console.log(` Невозможно получить данные с сервера. Ошибка:${error}`);
			return error;
		});
