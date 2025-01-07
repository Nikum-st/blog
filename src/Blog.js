import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const Content = styled.div`
	text-align: center;
`;

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;
const H2 = styled.h2`
	text-align: center;
`;

function Blog() {
	return (
		<>
			<Header />
			<Content>
				<H2>Основной контент</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>}></Route>
					<Route path="/login" element={<div>Авторизация</div>}></Route>
					<Route path="/register" element={<div>Регистрация</div>}></Route>
					<Route path="/users" element={<div>Пользователи</div>}></Route>
					<Route
						path="/post"
						element={<div>Страница создания статьи</div>}
					></Route>
					<Route
						path="/post/:postId"
						element={<div>Сраница статьи</div>}
					></Route>
					<Route path="*" element={<div>Ошибка</div>}></Route>
				</Routes>
			</Content>
			<Footer />
		</>
	);
}

export default Blog;
