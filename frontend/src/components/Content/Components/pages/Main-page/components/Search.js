import styled from 'styled-components';
import { Icon, Input } from '../../../../../components';
import PropTypes from 'prop-types';

const SearchContainer = ({ className, searchValue, onSearch, setSendSearchMode }) => {
	return (
		<div className={className}>
			<Input
				onChange={onSearch}
				value={searchValue}
				placeholder="Поиск по заголовку..."
			/>
			<Icon
				onClick={() => setSendSearchMode(true)}
				cursor="pointer"
				id="fa-search"
				margin="0 7px 0 0"
				size="18px"
			/>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 0 auto;
	border: 1px solid #000;

	& > input {
		padding: 10px 32px 10px 10px;
		height: 100%;
		border: none;
	}

	& > div {
		position: absolute;
		top: 3px;
		right: 9px;
		font-size: 23px;
	}
`;

Search.propTypes = {
	searchValue: PropTypes.string.isRequired,
	onSearch: PropTypes.func.isRequired,
	setSendSearchMode: PropTypes.func.isRequired,
};
