import { Box, Typography } from '@mui/material'
import defaultProfile from '../assets/Ellipse1.png';
const AttendenceDashboard = () => {
	return (
		<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{ width: '20%', height: '100vh', backgroundColor: 'black' }}>
				<Box sx={{ width: '100%', height: 160, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img src={defaultProfile} style={{ width: 80, height: 80 }} />
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: 'white' }}>Welcome</Typography>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: 'white' }}>Suman Kushwaha</Typography>
				</Box>
				<Box sx={{ backgroundColor: '#FFFFFF4D', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, marginTop: 5 }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: 'white' }}>Dashboard</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: '#FFFFFF4D', borderStyle: 'solid' }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: 'white', textTransform: 'uppercase' }}>profile</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50, borderWidth: 1, borderColor: '#FFFFFF4D', borderStyle: 'solid' }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: 'white', textTransform: 'uppercase' }}>logout</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '80%', height: 860, }}>
				<Box sx={{ padding: 5, }}>
					<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'black' }}>Welcome to dashBoard </Typography>
				</Box>
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
					<Box sx={{ width: 350, height: 80, display: 'flex', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
						<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'white', textTransform: 'uppercase' }}>Take Attendence</Typography>
					</Box>
					<Box sx={{ width: 350, height: 80, display: 'flex', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
						<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'white', textTransform: 'uppercase' }}>Train data</Typography>
					</Box>
				</Box>
				<Box sx={{ width: '100%', marginTop: 10, padding: 5 }}>
					<Typography sx={{ fontWeight: 700, fontSize: 32, color: '#000000CC' }}>Events and Announcements</Typography>
				</Box>
				<Box sx={{ width: '100%', height: 60, backgroundColor: '#0000001A', borderWidth: 1, borderColor: 'black', borderStyle: 'solid',display:'flex',justifyContent:'flex-start',alignItems:'center',paddingLeft:5 }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color:'#00000099'}}>Timetable effective from 31-04-2024 </Typography>
				</Box>
				<Box sx={{ width: '100%', height: 60, backgroundColor: '#0000001A', borderWidth: 1, borderColor: 'black', borderStyle: 'solid', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 5 }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: '#00000099' }}>Timetable effective from 31-04-2024 </Typography>
				</Box>
				<Box sx={{ width: '100%', height: 60, backgroundColor: '#0000001A', borderWidth: 1, borderColor: 'black', borderStyle: 'solid', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 5 }}>
					<Typography sx={{ fontWeight: 700, fontSize: 20, color: '#00000099' }}>Timetable effective from 31-04-2024 </Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default AttendenceDashboard