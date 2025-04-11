import styled from 'styled-components';
import { H2, Icon } from '../../../../../../components';
import { useSelector } from 'react-redux';
import { selectRole } from '../../../../../../../store';
import { ROLE } from '../../../../../../../constants';

const PostContentConatiner = ({ className, post }) => {
	const role = useSelector(selectRole);

	const access = [ROLE.ADMIN, ROLE.MODERATOR];
	return (
		<div className={className}>
			<img src={post.imageUrl} alt={post.id} />
			<H2 textAlign="left">{post.title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 7px 0 0"
						size="24px"
						onClick={() => {}}
					/>
					{post.publisedAt}
				</div>
				{access.includes(role) && (
					<div className="buttons">
						<Icon
							id="fa-pencil-square-o"
							cursor="pointer"
							size="24px"
							margin="0 20px 0 0"
							onClick={() => {}}
						/>
						<Icon
							cursor="pointer"
							id="fa-trash-o"
							size="24px"
							onClick={() => {}}
						/>
					</div>
				)}
			</div>
			<div className="post-text">{post.content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentConatiner)`
	& img {
		width: 450px;
		float: left;
		margin: 0 57px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: -9px 0 20px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		font-size: 18px;
	}

	& i {
		position: relative;
		top: -1px;
	}
	& .post-text {
		text-align: justify;
		font-size: 20px;
	}
	& .buttons {
		display: flex;
	}
`;
