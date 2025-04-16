import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../../hooks';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { selectPosts, setPostsAsync } from '../../../../../store';
import { Wrapper } from '../../../../components/Wrapper/Wrapper';
import { PostCard } from './components/PostCard';
import { Pagination } from './components/Pagination';
import { PAGINATION_LIMIT } from '../../../../../constants';

const MainPageContainer = ({ className }) => {
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const posts = useSelector(selectPosts);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		const fetchPosts = async () => {
			const last = await dispatch(
				setPostsAsync(serverRequest, page, PAGINATION_LIMIT),
			);
			setLastPage(last);
		};

		fetchPosts();
	}, [dispatch, serverRequest, posts.length, page]);

	return (
		<Wrapper>
			<div className={className}>
				{posts?.map(({ id, title, publisedAt, imageUrl, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publisedAt={publisedAt}
						imageUrl={imageUrl}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			<Pagination page={page} lastPage={lastPage} setPage={setPage} />
		</Wrapper>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	flex-wrap: wrap;
	padding: 20px 40px;
	justify-content: center;
`;
