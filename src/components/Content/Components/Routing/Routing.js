import { Routes, Route } from 'react-router-dom';
import {
	Users,
	Registration,
	Authorization,
	Error404Page,
	Post,
	MainPage,
} from '../pages';
export const Routing = () => (
	<Routes>
		<Route path="/" element={<MainPage />}></Route>
		<Route path="/login" element={<Authorization />}></Route>
		<Route path="/register" element={<Registration />}></Route>
		<Route path="/users" element={<Users />}></Route>
		<Route path="/post" element={<Post />}></Route>
		<Route path="/post/:id" element={<Post />}></Route>
		<Route path="/post/:id/edit" element={<Post />}></Route>
		<Route path="*" element={<Error404Page />}></Route>
	</Routes>
);
