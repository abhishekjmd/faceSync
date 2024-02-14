import { Box, FormControl, Link, TextField, Typography } from '@mui/material';
import Search from '../assets/Search.png';

const AttendenceSheet = () => {
	return (
		<Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column',marginTop:10 }}>
			<Box>
				<Typography sx={{ fontWeight: 700, fontSize: 48, color: 'black', textTransform: 'uppercase' }}>Attendance Sheet</Typography>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
				<Box sx={{ width: 800, height: 60, backgroundColor: '#0000001A', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
					<img src={Search} style={{ width: 25, height: 25 }} />
					<TextField
						label='Search Here'
						sx={{ width: 600 }}
					/>
					<Box sx={{ width: 100, backgroundColor: '#00000080', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 60, borderRadius: 1 }}>
						<Typography sx={{ fontWeight: 700, fontSize: 24, color: 'white' }}>Enter</Typography>
					</Box>
				</Box>
				<Box sx={{ width: 200, height: 60, backgroundColor: 'black', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
					<Typography sx={{ fontWeight: 700, fontSize: 24, color: 'white' }}>Sort</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '100%', backgroundColor: '#000000CC', display: 'flex', height: 80, marginTop: 5 }}>
				{/* Header items with flexGrow to ensure they take up equal space */}
				<Typography sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'white' }}>No</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'white' }}>Enrollment</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'white' }}>Full Name</Typography>
				<Typography sx={{ flexGrow: 2, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'white' }}>Date</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'white' }}>Attendance Status</Typography>
				<Box sx={{ flexGrow: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Box> {/* Empty Box for alignment */}
			</Box>
			<Box sx={{ width: '100%', backgroundColor: '#0000001A', display: 'flex', height: 80,alignItems:'center' }}>
				{/* Content items with flexGrow to ensure they take up equal space */}
				<Typography sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>1</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>202100319010028</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>Suman Kushwaha</Typography>
				<Typography sx={{ flexGrow: 2, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>12-02-2024</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>Present</Typography>
				<Link component="button" sx={{ flexGrow: 2, color: 'black', fontWeight: 700, fontSize: 24, textAlign: 'center' }} underline="always">View Student Profile</Link>
			</Box>
			<Box sx={{ width: '100%', backgroundColor: '#0000001A', display: 'flex', height: 80, alignItems: 'center' }}>
				{/* Content items with flexGrow to ensure they take up equal space */}
				<Typography sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>2</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>2201030400142</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>Abhisek Tiwari</Typography>
				<Typography sx={{ flexGrow: 2, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>12-02-2024</Typography>
				<Typography sx={{ flexGrow: 3, textAlign: 'center', fontWeight: 700, fontSize: 24, color: 'black' }}>Absent</Typography>
				<Link component="button" sx={{ flexGrow: 2, color: 'black', fontWeight: 700, fontSize: 24, textAlign: 'center' }} underline="always">View Student Profile</Link>
			</Box>
		</Box>
	);
}

export default AttendenceSheet;
