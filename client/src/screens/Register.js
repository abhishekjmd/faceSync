import { Box, FormControl, Link, TextField, Typography } from '@mui/material'
import { useState } from 'react';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	return (
		<Box sx={{ width: '100%', height: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{}}>
				<Typography sx={{ fontWeight: 700, fontSize: 48, textTransform: 'uppercase' }}>Welcome to facesync</Typography>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: 700, fontSize: 36, color: '#000000B2' }}>Register here</Typography>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Enter your E-mail here'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Create Password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Confirm Password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 350, height: 70, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
				<Typography sx={{ fontWeight: 700, fontSize: 36, textTransform: 'uppercase', color: 'white' }}>Register</Typography>
			</Box>
			<Box sx={{ width: 600, marginTop: 2, fontWeight: 700, fontSize: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Typography>Already have an account?&nbsp;
					<Link component="button" sx={{ color: '#000000CC', fontWeight: 700, fontSize: 18 }} underline="always">
						Click here
					</Link>
				</Typography>
			</Box>
		</Box>

	)
}

export default Register