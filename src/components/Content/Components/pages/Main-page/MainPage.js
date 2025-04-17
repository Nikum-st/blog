import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../../hooks';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { selectPosts, setPostsAsync, setPostsSearchAsync } from '../../../../../store';
import { Wrapper } from '../../../../components/Wrapper/Wrapper';
import { PostCard } from './components/PostCard';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { PAGINATION_LIMIT } from '../../../../../constants';
import { ErrorMessage } from '../../../../components';

const MainPageContainer = ({ className }) => {
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const posts = useSelector(selectPosts);
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [sendSearchMode, setSendSearchMode] = useState(false);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		if (!searchValue) {
			const fetchPosts = async () => {
				const last = await dispatch(
					setPostsAsync(serverRequest, page, PAGINATION_LIMIT),
				);
				setLastPage(last);
			};

			fetchPosts();
		}
	}, [dispatch, serverRequest, posts.length, page, searchValue]);

	// const debounceRequest = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		if (target.value.length === 0) {
			setSendSearchMode(false);
		}
		setSearchValue(target.value);
	};

	const submitSearch = async () => {
		if (!searchValue) {
			return;
		}
		setSendSearchMode(true);
		await dispatch(setPostsSearchAsync(serverRequest, searchValue));
	};

	return (
		<Wrapper>
			<Search
				searchValue={searchValue}
				onSearch={onSearch}
				submitSearch={submitSearch}
			/>
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
			{sendSearchMode === false && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
			{!posts.length && <ErrorMessage>Статьи не найдены</ErrorMessage>}
		</Wrapper>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	flex-wrap: wrap;
	padding: 20px 40px;
	justify-content: center;
`;
