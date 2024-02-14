import { Box, IconButton, Typography } from '@mui/material';
import AddStudentLogo from '../assets/PersonPlusFill.png';
import TakeAttendenceLogo from '../assets/Calendar2CheckFill.png';
import TrainDataLogo from '../assets/FileEarmarkMinusFill.png';
import EditAttendenceLogo from '../assets/PencilSquare.png';
import ViewAttendenceLogo from '../assets/Eye.png';
import ChatLogo from '../assets/ChatDotsFill.png';

const cardsData = [
	{ title: 'Add Student', image: AddStudentLogo },
	{ title: 'Take Attendance', image: TakeAttendenceLogo },
	{ title: 'Train Data', image: TrainDataLogo },
	{ title: 'Edit Attendance', image: EditAttendenceLogo },
	{ title: 'View Attendance', image: ViewAttendenceLogo },
	{ title: 'Chat', image: ChatLogo },
];

const AdminPage = () => {
	return (
		<Box sx={{
			width: 1200,
			height: 860,
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 2,
		}}>
			{cardsData.map((card, index) => (
				<Box key={index} sx={{ width: 310, height: 350, backgroundColor: '#00000033', borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<img src={card.image} style={{ width: 80, height: 80 }} alt={card.title} />
					<Box sx={{ width: 180, height: 80, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 5, textAlign: 'center' }}>
						<Typography sx={{ fontSize: 20, fontWeight: 700, color: '#000000', textTransform: 'uppercase' }}>
							{card.title}
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
}

export default AdminPage;
