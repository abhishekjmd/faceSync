import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const StudentRegistration = () => {
	return (
		<Box sx={{ width: '100%', height: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Box sx={{}}>
				<Typography sx={{ fontWeight: 700, fontSize: 48, textTransform: 'uppercase' }}>Add Student</Typography>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student Name'
							name='studentName'
						/>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<InputLabel>Enter Gender</InputLabel>
						<Select
							label='Enter Gender'
							name='gender'
						>
							<MenuItem value="Male">Male</MenuItem>
							<MenuItem value="Female">Female</MenuItem>
							<MenuItem value="Other">Other</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student DOB'
							name='sudentDob'
						/>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<InputLabel>Select Student Department</InputLabel>
						<Select
							label='Select Student Department'
							name='studentDepartment'
						>
							<MenuItem value="Computer Science">Computer Science</MenuItem>
							<MenuItem value="Mathematics">Mathematics</MenuItem>
							<MenuItem value="Economics">Economics</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<InputLabel>Select Course</InputLabel>
						<Select
							label='Select Course'
							name='course'
						>
							<MenuItem value="Introduction to Programming">Introduction to Programming</MenuItem>
							<MenuItem value="Advanced Mathematics">Advanced Mathematics</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<InputLabel>Select Semester</InputLabel>
						<Select
							label='Select Semester'
							name='semester'
						>
							<MenuItem value="1">1</MenuItem>
							<MenuItem value="2">2</MenuItem>
							<MenuItem value="3">3</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student division'
							name='division'
						/>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student roll Number'
							name='rollNumber'
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student enrollment number'
							name='enrollmentNumber'
						/>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student Email'
							name='email'
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Student Phone Number'
							name='phoneNumber'
						/>
					</FormControl>
				</Box>
				<Box sx={{ width: 600, backgroundColor: '#0000001A', marginTop: 5, boxShadow: '0px 4px 4px 0px #00000040', }}>
					<FormControl fullWidth>
						<TextField
							label='Enter Password'
							name='password'
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ width: 350, height: 70, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
				<Typography sx={{ fontWeight: 700, fontSize: 36, textTransform: 'uppercase', color: 'white' }}>Insert</Typography>
			</Box>
		</Box>
	)
}

export default StudentRegistration;