import { Box, FormControl, Link, TextField, Typography } from '@mui/material'

const StudentsLogin = () => {
	return (
		<Box sx={{ width: '100%', height: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{}}>
				<Typography sx={{ fontWeight: 700, fontSize: 48, textTransform: 'uppercase' }}>Student login</Typography>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 8, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Enter your Email'
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Enter your Password'
						name='password'
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 600, marginTop: 2, fontWeight: 700, fontSize: 20 }}>
				<Typography>Forget your Password?&nbsp;
					<Link component="button" sx={{ color: '#000000CC', fontWeight: 700, fontSize: 18 }} underline="always">
						Click here
					</Link>
				</Typography>
			</Box>
			<Box sx={{ width: 350, height: 70, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
				<Typography sx={{ fontWeight: 700, fontSize: 36, textTransform: 'uppercase', color: 'white' }}>Login</Typography>
			</Box>
		</Box>
	)
}

export default StudentsLogin