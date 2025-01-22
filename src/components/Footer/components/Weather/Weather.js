import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
`;

const WeatherContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [icon, setIcon] = useState(null);
	const [temp, setTemp] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=2b8467a5f6c9c5f53a13100cf4275857',
		)
			.then((response) => response.json())
			.then((data) => {
				setCity(data.name);
				setIcon(
					`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				);
				setTemp(Math.round(data.main.temp));
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
