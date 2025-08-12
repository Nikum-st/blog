import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { selectPosts, setPostsAsync } from '../../../../../store';
import { Wrapper } from '../../../../components/Wrapper/Wrapper';
import { PostCard } from './components/PostCard';
import { Pagination } from './components/Pagination';
import { Search } from './components/Search';
import { PAGINATION_LIMIT } from '../../../../../constants';
import { ErrorMessage } from '../../../../components';
import { debounce } from '../../../../../utils/debounce';
import { useTranslation } from 'react-i18next';

const MainPageContainer = ({ className }) => {
	const [page, setPage] = useState(1);
	const [searchValue, setSearchValue] = useState('');
	const [sendSearchMode, setSendSearchMode] = useState(false);
	const [lastPage, setLastPage] = useState(1);
	const [errorServer, setErrorServer] = useState(null);
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const posts = useSelector(selectPosts);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const last = await dispatch(
					setPostsAsync(searchValue, page, PAGINATION_LIMIT),
				);
				setLastPage(last);
			} catch (e) {
				setErrorServer(t(`Ошибка_сервера`));
			}
		};

		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, page, sendSearchMode, t]);

	const debounceRequest = useMemo(() => debounce(setSendSearchMode, 2000), []);

	const onSearch = ({ target }) => {
		if (target.value.length === 0) {
			setSendSearchMode(false);
		}
		setSearchValue(target.value);
		debounceRequest(!sendSearchMode);
	};

	return (
		<Wrapper error={errorServer}>
			<Search
				searchValue={searchValue}
				onSearch={onSearch}
				setSendSearchMode={setSendSearchMode}
			/>
			<div className={className}>
				{posts?.map(({ id, title, publishedAt, imageUrl, comments }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						imageUrl={imageUrl}
						comments={comments}
					/>
				))}
			</div>
			{sendSearchMode === false && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
			{!posts.length && sendSearchMode && (
				<ErrorMessage>{t('Статьи не найдены')}</ErrorMessage>
			)}
		</Wrapper>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	flex-wrap: wrap;
	padding: 20px 40px;
	justify-content: center;
`;
