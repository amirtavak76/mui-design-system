'use client';

import {createTheme} from '@mui/material';

export const theme = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				disableElevation: true,
			},
		},
	},
	palette: {
		primary: {
			main: '#345212'
		},
	},
})