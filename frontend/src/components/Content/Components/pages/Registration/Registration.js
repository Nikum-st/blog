import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../../../yup/yup';
import { Button, ErrorMessage, H2, Input, Wrapper } from '../../../../components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loading, setUser } from '../../../../../store';
import styled from 'styled-components';
import { request } from '../../../../../utils/request-server';

export const RegistrationContainer = ({ className }) => {
	const [errorServer, setErrorServer] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = async ({ login, password }) => {
		dispatch(loading(true));
		await request('/user/register', 'POST', { login, password })
			.then(({ error, data }) => {
				if (error) {
					setErrorServer(error);
					return;
				}
				dispatch(setUser(data));
				sessionStorage.setItem('user', JSON.stringify(data));
				navigate('/');
			})
			.catch(() => {
				setErrorServer('Нет связи с сервером. Попробуйте позже');
			})
			.finally(() => {
				dispatch(loading(false));
			});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(yupSchema.registration),
	});

	const errorMessage =
		errors.login?.message ||
		errors.password?.message ||
		errors.passcheck?.message ||
		errorServer;

	return (
		<Wrapper>
			<div className={className}>
				<H2>Регистрация</H2>
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
					<Input
						type="text"
						placeholder="Повторите пароль..."
						{...register(`passcheck`, {
							onChange: () => {
								setErrorServer(null);
							},
						})}
					/>
					<Button type="submit" width="100%" disabled={!!errorServer}>
						Зарегестрироваться
					</Button>
				</form>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</div>
		</Wrapper>
	);
};

export const Registration = styled(RegistrationContainer)`
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
