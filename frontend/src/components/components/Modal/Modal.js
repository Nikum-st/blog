import styled from 'styled-components';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
	CLOSE_MODAL,
	selectIsOpenModal,
	selectOnConfirmModal,
	selectTextModal,
} from '../../../store';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectTextModal);
	const dispatch = useDispatch();
	const onConfirm = useSelector(selectOnConfirmModal);
	const isOpen = useSelector(selectIsOpenModal);

	if (!isOpen) {
		return;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={() => dispatch(CLOSE_MODAL)}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
	& .box {
		position: relative;
		top: 50%;
		transform: translate(0px, -50px);
		width: 400px;
		margin: 0 auto;
		padding: 0 20px 20px;
		background-color: #fff;
		border: 3px solid #000;
		z-index: 30;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}
`;
