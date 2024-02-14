import { Box, FormControl, TextField, Typography, Grid } from '@mui/material';
import defaultProfile from '../assets/Ellipse1.png';

const Profile = () => {
	return (
		<Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{ width: '20%', height: '100vh', backgroundColor: 'black' }}>
				{/* Profile Sidebar Content */}
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
			<Box sx={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
				<Typography sx={{ fontWeight: 700, fontSize: 32, color: 'black', textTransform: 'uppercase', my: 3 }}>
					Welcome to profile
				</Typography>
				<Grid container spacing={1} sx={{ width: '100%', maxWidth: 1000 }}>
					{[
						{ label: 'Full Name', type: 'text' },
						{ label: 'Gender', type: 'text' },
						{ label: 'DOB', type: 'date' },
						{ label: 'Department', type: 'text' },
						{ label: 'Course', type: 'text' },
						{ label: 'Semester', type: 'text' },
						{ label: 'Division', type: 'text' },
						{ label: 'Roll Number', type: 'text' },
						{ label: 'Enrollment', type: 'text' },
						{ label: 'Email', type: 'email' },
						{ label: 'Phone Number', type: 'tel' },
						{ label: 'Password', type: 'password' },
					].map((field, index) => (
						<Grid item xs={12} sm={6} key={index}>
							<Typography sx={{ fontSize: 24, fontWeight: 700, color: 'black', mb: 1 }}>{field.label}</Typography>
							<FormControl fullWidth variant="outlined">
								<TextField
									type={field.type}
									variant="outlined"
								// Uncomment and use the following lines if you are managing state
								// value={values[field.label.toLowerCase().replace(' ', '_')]}
								// onChange={(e) => setValues({...values, [field.label.toLowerCase().replace(' ', '_')]: e.target.value})}
								/>
							</FormControl>
						</Grid>
					))}
				</Grid>
				<Box sx={{margin:5}}>
					<Box sx={{ width: 200, height: 60, borderRadius: 5, backgroundColor: 'black',display:'flex',justifyContent:'center',alignItems:'center' }}>
						<Typography sx={{fontWeight:700,fontSize:20,color:'white',textTransform:'uppercase'}}>Update</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Profile;
