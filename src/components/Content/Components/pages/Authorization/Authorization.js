import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, ErrorMessage, H2, Input } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { yupSchema } from '../../../../../yup/yup';
import { setUser } from '../../../../../store';
import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../../hooks';

const LinkStiled = styled(Link)`
	margin: 17px;
	color: #4300ff;
	text-decoration: underline;
	&:hover {
		color: rgb(31, 0, 172);
		text-decoration: none;
	}
`;

const AuthorizationContainer = ({ className }) => {
	const [errorServer, setErrorServer] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const serverRequest = useRequestServer();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(yupSchema.authorization),
	});

	const onSubmit = async ({ login, password }) => {
		await serverRequest('authorization', login, password).then(({ error, res }) => {
			if (error) {
				setErrorServer(error);
				return;
			}
			dispatch(setUser(res));
			sessionStorage.setItem('user', JSON.stringify(res));
			navigate('/');
		});
	};
	const errorMessage = errors.login?.message || errors.password?.message || errorServer;

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register(`login`, {
						onChange: () => {
							setErrorServer(null);
						},
					})}
				/>
				<Input
					type="text"
					placeholder="Пароль..."
					{...register(`password`, {
						onChange: () => {
							setErrorServer(null);
						},
					})}
				/>
				<Button type="submit" width="100%" disabled={!!errorServer}>
					Авторизоваться
				</Button>
			</form>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			<LinkStiled to="/register">Регистрация</LinkStiled>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		width: 250px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;
