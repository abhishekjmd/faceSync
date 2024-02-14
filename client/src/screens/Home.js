import React from 'react';
import Header from '../components/landingPage/Header';
import MainComp from '../components/landingPage/MainComp';
import { Box } from '@mui/material';
import FooterBtns from '../components/landingPage/FooterBtns';

const Home = () => {
	return (
		<Box>
			<Header />
			<MainComp />
			<FooterBtns />
		</Box>
	)
}

export default Home
