import {FunctionComponent} from 'react';
import { RxButtonProps } from './Button.types';
import StyledButton from './Button.styles';

const RxButton: FunctionComponent<RxButtonProps> = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>
}

export default RxButton;