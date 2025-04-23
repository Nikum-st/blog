const getLocationByIP = async () => {
	const res = await fetch('http://ip-api.com/json');
	return await res.json();
};

const getWeatherByCoords = async (lat, lon) => {
	const apiKey = '2b8467a5f6c9c5f53a13100cf4275857';
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${apiKey}`,
	);
	return await res.json();
};

export const fetchWeatherByIP = async () => {
	const { lat, lon } = await getLocationByIP();
	const weather = await getWeatherByCoords(lat, lon);
	return weather;
};
