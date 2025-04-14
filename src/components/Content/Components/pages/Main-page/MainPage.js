import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../../hooks';
import styled from 'styled-components';
import { useEffect } from 'react';
import { selectPosts, setPostsAsync } from '../../../../../store';

const MainPageContainer = ({ className }) => {
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const posts = useSelector(selectPosts);

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(setPostsAsync(serverRequest));
		}
	}, [dispatch, serverRequest, posts.length]);

	return <div className={className}></div>;
};

export const MainPage = styled(MainPageContainer)``;
