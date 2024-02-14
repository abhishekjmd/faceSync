import { Box, Typography } from '@mui/material';
import React from 'react';

const FooterBtns = () => {
	return (
		<Box sx={{
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Box sx={{
				width: 150,
				height: 40,
				borderWidth: 1,
				borderColor: 'black',
				borderStyle: 'solid',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Typography sx={{
					fontWeight: 700,
					fontSize: 18,
					color: 'black',
				}}>Get Started</Typography>
			</Box>
			<Box sx={{
				width: 150,
				height: 40,
				borderWidth: 1,
				backgroundColor: 'black',
				borderStyle: 'solid',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Typography sx={{
					fontWeight: 700,
					fontSize: 18,
					color: 'white',
				}}>Learn More</Typography>
			</Box>
		</Box>
	);
};

export default FooterBtns;
