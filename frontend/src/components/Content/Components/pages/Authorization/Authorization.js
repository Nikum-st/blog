import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, ErrorMessage, H2, Input, Wrapper } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { yupSchema } from '../../../../../yup/yup';
import { loading, setUser } from '../../../../../store';
import { useDispatch } from 'react-redux';
import { request } from '../../../../../utils/request-server';
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

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
		const log = login.trim();
		dispatch(loading(true));
		await request('user/authorize', 'POST', { log, password })
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
				setErrorServer(t('Нет связи с сервером. Попробуйте позже'));
				return;
			})
			.finally(() => {
				dispatch(loading(false));
			});
	};

	const errorMessage = errors.login?.message || errors.password?.message || errorServer;

	return (
		<Wrapper>
			{' '}
			<div className={className}>
				<H2>Авторизация</H2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="text"
						placeholder={t('Логин')}
						{...register(`login`, {
							onChange: () => {
								setErrorServer(null);
							},
						})}
					/>
					<Input
						type="text"
						placeholder={t('Пароль')}
						{...register(`password`, {
							onChange: () => {
								setErrorServer(null);
							},
						})}
					/>
					<Button type="submit" width="100%" disabled={!!errorServer}>
						{t('Авторизоваться')}
					</Button>
				</form>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<LinkStiled to="/register">{t('Регистрация')}</LinkStiled>
			</div>
		</Wrapper>
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
