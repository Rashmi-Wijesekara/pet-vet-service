import React from "react";

import Navbar from "../../shared/components/Navbar";
import ScheduleCardsContainer from "../../components/ScheduleCardsContainer";


import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Schedule = () => {
		
	return (
		<>
		<div className="flex flex-row">
			<Header/>
			<Navbar path="/schedule" />	
			<ScheduleCardsContainer/>	
			<Footer/>	
		</div>
		</>
	);
};

export default Schedule