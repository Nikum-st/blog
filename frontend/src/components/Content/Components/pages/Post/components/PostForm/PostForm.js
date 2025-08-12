import styled from 'styled-components';
import { ErrorMessage, Icon, Input, Wrapper } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	CLOSE_MODAL,
	selectRoleId,
	setPostAsync,
	savePostAsync,
	CLEAR_POST,
	modalOpen,
} from '../../../../../../../store';
import { useEffect, useRef, useState } from 'react';
import { SpecialPanel } from '../SpecialPanel/SpecialPanel';
import { sanitizeContent } from './utils/sanitize-content';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../../../../constants';
import { useTranslation } from 'react-i18next';

const PostFormContainer = ({ className, post, isCreating }) => {
	const [error, setError] = useState(null);
	const [errorInput, setErrorInput] = useState(null);
	const role = useSelector(selectRoleId);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const contentRef = useRef(null);
	const imageRef = useRef(null);
	const titleRef = useRef(null);

	const { t } = useTranslation();

	useEffect(() => {
		if (!post && !isCreating) {
			dispatch(setPostAsync(post.id)).catch(() => setError(`Ошибка_сервера`));
		} else if (isCreating) {
			dispatch(CLEAR_POST);
			if (imageRef.current) imageRef.current.value = '';
			if (titleRef.current) titleRef.current.value = '';
		}
	}, [role, dispatch, post, isCreating, t]);

	const saveNewData = () => {
		const editData = {
			newContent: sanitizeContent(contentRef.current.innerHTML),
			newImage: imageRef.current.value,
			newTitle: titleRef.current.value,
		};

		if (!editData.newContent || !editData.newImage || !editData.newTitle) {
			setErrorInput('Поля_заполнены');
			return;
		}

		dispatch(
			modalOpen({
				text: t('Сохранить'),
				onConfirm: async () => {
					try {
						const result = await dispatch(savePostAsync(post?.id, editData));
						dispatch(CLOSE_MODAL);
						navigate(`/post/${result?.id}`);
					} catch (e) {
						dispatch(CLOSE_MODAL);
						setError(e.message ?? 'Ошибка_сервера');
					}
				},
			}),
		);
	};

	return (
		<Wrapper
			error={error === 'Ошибка_сервера' ? t(error) : error}
			access={[ROLE.ADMIN]}
		>
			{errorInput && <ErrorMessage>{t(errorInput)}</ErrorMessage>}
			<div className={className}>
				<Input
					ref={imageRef}
					defaultValue={post?.imageUrl}
					width="90%"
					placeholder={t('Изображение')}
					onChange={() => setErrorInput(null)}
				/>
				<Input
					maxLength="100"
					ref={titleRef}
					defaultValue={post?.title}
					width="90%"
					placeholder={t('Заголовок')}
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
					{t('Контент')}
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
