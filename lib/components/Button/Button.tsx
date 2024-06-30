import {FunctionComponent} from 'react';
import { ButtonProps } from './Button.types.ts';

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
	return <button>{children}</button>
}

export default Button;