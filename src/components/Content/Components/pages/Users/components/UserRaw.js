import styled from 'styled-components';
import { Icon } from '../../../../../components';

const UserRawContainer = ({ className }) => (
	<div className={className}>
		<div className="login">nameLogin</div>
		<div className="date-registration">19.02.2019</div>
		<div className="role">role select</div>
		<div className="icons">
			<Icon
				id={'fa-floppy-o'}
				size={'18px'}
				margin="0px 0px 0px 10px"
				cursor={'pointer'}
			/>
			<Icon
				id="fa-trash-o"
				size="18px"
				margin="0px 0px 0px 10px"
				cursor="pointer"
			/>
		</div>
	</div>
);

export const UserRaw = styled(UserRawContainer)`
	padding: 10px;
	border: 2px solid;
	display: flex;
	justify-content: space-between;
	width: 540px;
	align-items: center;
	margin: 10px;
	font-size: 17px;

	& .login {
		margin-right: 69px;
	}
	& .date-registration {
		margin-right: 82px;
	}
	& .icons {
		display: flex;
	}
`;
