import { Box, FormControl, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const ContactUs = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<Box sx={{ width: '100%', height: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{}}>
				<Typography sx={{ fontSize: 48, fontWeight: 700, textTransform: 'uppercase' }}>Contact us</Typography>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 10, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Enter your Email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
				<FormControl fullWidth>
					<TextField
						label='Enter your Message'
						name='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						multiline
						rows={8}
						variant="outlined"
					/>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, height: 80, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:8 }}>
				<Typography sx={{ fontWeight: 700, fontSize: 36, textTransform: 'uppercase', color: 'white' }}>Send</Typography>
			</Box>
		</Box>
	)
}

export default ContactUs