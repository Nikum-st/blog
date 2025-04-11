import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchWeatherByIP } from './utils/fetchWeatherByIP';

const Text = styled.div`
	text-align: center;
	font-size: 16px;
	font-weight: 500;
`;

const Info = styled.div`
	width: 67px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 38px;
	gap: 10px;
`;

const WeatherContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [icon, setIcon] = useState(null);
	const [temp, setTemp] = useState('');

	useEffect(() => {
		fetchWeatherByIP().then((data) => {
			setCity(data.name);
			setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

			const temp =
				data.main.temp > 0
					? `+${Math.round(data.main.temp)}`
					: Math.round(data.main.temp);

			setTemp(temp);
		});
	}, []);

	return (
		<div className={className}>
			<Text>{city}</Text>
			<Info>
				<img
					src={icon}
					style={{ width: `50px`, height: `50px` }}
					alt="Иконка погоды"
				/>
				<Text>{temp}</Text>
			</Info>
		</div>
	);
};

export const Weather = styled(WeatherContainer)`
	font-size: 14px;
	height: 62px;
	width: 114px;
	margin-right: 10px;
	background-color: rgba(64, 80, 96, 0.3);
	border-radius: 10px;
`;
