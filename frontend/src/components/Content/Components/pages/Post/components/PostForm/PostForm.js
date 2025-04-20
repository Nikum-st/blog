import styled from 'styled-components';
import { ErrorMessage, Icon, Input, Wrapper } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	CLOSE_MODAL,
	selectRole,
	setPostAsync,
	savePostAsync,
	CLEAR_POST,
	modalOpen,
} from '../../../../../../../store';
import { useEffect, useRef, useState } from 'react';
import { SpecialPanel } from '../SpecialPanel/SpecialPanel';
import { sanitizeContent } from './utils/sanitize-content';
import { useRequestServer } from '../../../../../../../hooks';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../../../../constants';

const PostFormContainer = ({ className, post, isCreating }) => {
	const [error, setError] = useState(null);
	const [errorInput, setErrorInput] = useState(null);
	const role = useSelector(selectRole);
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const navigate = useNavigate();

	const contentRef = useRef(null);
	const imageRef = useRef(null);
	const titleRef = useRef(null);

	useEffect(() => {
		if (!post && !isCreating) {
			dispatch(setPostAsync(serverRequest, post.id)).catch(() =>
				setError(`Нет связи с сервером. Попробуйте позже`),
			);
		} else if (isCreating) {
			dispatch(CLEAR_POST);
			if (imageRef.current) imageRef.current.value = '';
			if (titleRef.current) titleRef.current.value = '';
		}
	}, [role, dispatch, post, serverRequest, isCreating]);

	const saveNewData = () => {
		const editData = {
			newContent: sanitizeContent(contentRef.current.innerHTML),
			newImage: imageRef.current.value,
			newTitle: titleRef.current.value,
		};

		if (!editData.newContent || !editData.newImage || !editData.newTitle) {
			setErrorInput('Все поля должны быть заполнены');
			return;
		}

		dispatch(
			modalOpen({
				text: 'Сохранить изменения?',
				onConfirm: async () => {
					const result = await dispatch(
						savePostAsync(serverRequest, post?.id, editData),
					);
					dispatch(CLOSE_MODAL);
					navigate(`/post/${result.id}`);
				},
			}),
		);
	};

	return (
		<Wrapper error={error} access={[ROLE.ADMIN]}>
			{errorInput && <ErrorMessage>{errorInput}</ErrorMessage>}
			<div className={className}>
				<Input
					ref={imageRef}
					defaultValue={post?.imageUrl}
					width="90%"
					placeholder="Изображение..."
					onChange={() => setErrorInput(null)}
				/>
				<Input
					maxLength="100"
					ref={titleRef}
					defaultValue={post?.title}
					width="90%"
					placeholder="Заголовок..."
					onChange={() => setErrorInput(null)}
				/>
				{isCreating ? (
					<Icon
						id="fa-floppy-o"
						cursor="pointer"
						size="24px"
						margin="0 20px 0 0"
						onClick={saveNewData}
					/>
				) : (
					<SpecialPanel
						id={post?.id}
						onClick={saveNewData}
						publisedAt={post?.publisedAt}
						margin="17px 104px"
					/>
				)}

				<label>
					{' '}
					Контент
					<div
						ref={contentRef}
						suppressContentEditableWarning={true}
						contentEditable={true}
						className="post-text"
					>
						{post?.content}
					</div>
				</label>
			</div>
		</Wrapper>
	);
};

export const PostForm = styled(PostFormContainer)`
	padding: 50px;
	& .post-text {
		text-align: justify;
		font-size: 20px;
		white-space: pre-wrap;
		border: 2px solid black;
		min-height: 130px;
		margin-top: 10px;
		padding: 20px;
		cursor: text;
	}
`;
