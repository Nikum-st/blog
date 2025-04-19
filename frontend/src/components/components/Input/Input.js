import styled from 'styled-components';

const InputContainer = ({ className, ...props }) => (
	<input className={className} {...props} />
);

export const Input = styled(InputContainer)`
    height: 32px;
   width: ${({ width = '100%' }) => width};
    margin-bottom: 11px;
    padding: 10px;
    font-size: 14px;
    font-width: bold;
    border: 2px solid #000;
}
`;
