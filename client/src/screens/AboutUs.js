import { Box, Typography } from '@mui/material'

const AboutUs = () => {
	return (
		<Box sx={{ width: '100%', height: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{}}>
				<Typography sx={{ fontWeight: 700, fontSize: 48, textTransform: 'uppercase' }}>About Us</Typography>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: 700, fontSize: 24, color: '#5A5A5A' }}>Facial Recognition Attendence Management System</Typography>
			</Box>
			<Box sx={{width: 1000 ,marginTop:10}}>
				<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'black' }}>1. Real-time Face Detection</Typography>
				<Typography sx={{ fontWeight: 700, fontSize: 24, color: '#5A5A5A' }}>faceSync provides the feature of real-time face detection that helps to take real time attendence</Typography>
			</Box>
			<Box sx={{ width: 1000,marginTop: 3,display:'flex',flexDirection:'column',flexWrap:'wrap' }}>
				<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'black' }}>2. Event Management</Typography>
				<Typography sx={{ fontWeight: 700, fontSize: 24, color: '#5A5A5A' }}>faceSync provides the feature of adding events and announcements that provides details regarding any events and announcements happening in collage.</Typography>
			</Box>
			<Box sx={{ width: 1000, marginTop: 3, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
				<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'black' }}>3. Accuracy </Typography>
				<Typography sx={{ fontWeight: 700, fontSize: 24, color: '#5A5A5A' }}>faceSync provides the feature of taking facial attendence easily and accurately</Typography>
			</Box>
			<Box sx={{ width: 350, height: 70, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
				<Typography sx={{ fontWeight: 700, fontSize: 36, textTransform: 'uppercase', color: 'white' }}>Contact Us</Typography>
			</Box>
			</Box>
	)
}

export default AboutUs