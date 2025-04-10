import { Routes, Route } from 'react-router-dom';
import { Users, Registration, Authorization, Error404Page } from '../pages';

export const Routing = () => (
	<Routes>
		<Route path="/" element={<div>Главная страница</div>}></Route>
		<Route path="/login" element={<Authorization />}></Route>
		<Route path="/register" element={<Registration />}></Route>
		<Route path="/users" element={<Users />}></Route>
		<Route path="/post" element={<div>Страница создания статьи</div>}></Route>
		<Route path="/post/:postId" element={<div>Сраница статьи</div>}></Route>
		<Route path="*" element={<Error404Page />}></Route>
	</Routes>
);
