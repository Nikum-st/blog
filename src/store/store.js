import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	usersReducer,
	postReducer,
	postsReducer,
	userReducer,
	appReducer,
	rolesReducer,
} from './reducers';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
	roles: rolesReducer,
});

export const store = createStore(reducer, composer(applyMiddleware(thunk)));
