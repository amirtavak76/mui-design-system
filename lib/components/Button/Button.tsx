import {FunctionComponent} from 'react';
import { RxButtonProps } from './Button.types.ts';
import {Button} from '@mui/material';

const RxButton: FunctionComponent<RxButtonProps> = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>
}

export default RxButton;