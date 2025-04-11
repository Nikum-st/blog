import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../../../yup/yup';
import { Button, ErrorMessage, H2, Input } from '../../../../components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../../hooks';
import { setUser } from '../../../../../store';
import styled from 'styled-components';

export const RegistrationContainer = ({ className }) => {
	const [errorServer, setErrorServer] = useState(null);
	const serverRequest = useRequestServer();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = async ({ login, password }) => {
		await serverRequest('registration', login, password).then(({ error, res }) => {
			if (error) {
				setErrorServer(error);
				return;
			}
			dispatch(setUser(res));
			sessionStorage.setItem('user', JSON.stringify(res));
			navigate('/');
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
