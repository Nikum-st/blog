import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../../../../../../../store/actions/app/modal-open';
import { CLOSE_MODAL, deletePostAsync, selectRoleId } from '../../../../../../../store';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../../../../constants';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton, onClick }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const role = useSelector(selectRoleId);
	const access = [ROLE.ADMIN];

	const deletePost = (id) => {
		dispatch(
			modalOpen({
				text: 'Вы уверены, что хотите удалить статью? ',
				onConfirm: async () => {
					await dispatch(deletePostAsync(id));
					navigate('/');
					dispatch(CLOSE_MODAL);
				},
			}),
		);
	};

	return (
		<div className={className}>
			{publishedAt && (
				<div className="published-at">
					<Icon id="fa-calendar-o" margin="0 7px 0 0" size="24px" />
					{publishedAt}
				</div>
			)}
			{access.includes(role) && (
				<div className="buttons">
					{editButton ? (
						<Icon
							id="fa-pencil-square-o"
							cursor="pointer"
							size="24px"
							margin="0 20px 0 0"
							onClick={() => onClick()}
						/>
					) : (
						<Icon
							id="fa-floppy-o"
							cursor="pointer"
							size="24px"
							margin="0 20px 0 0"
							onClick={() => onClick()}
						/>
					)}
					{publishedAt && (
						<Icon
							cursor="pointer"
							id="fa-trash-o"
							size="24px"
							onClick={() => deletePost(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: ${({ margin = '-9px 0 20px' }) => margin};

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}
	& .buttons {
		display: flex;
	}
`;
