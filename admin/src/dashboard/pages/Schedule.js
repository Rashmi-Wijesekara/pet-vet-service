import React from "react";

import Navbar from "../../shared/components/Navbar";
import ScheduleCardsContainer from "../../components/ScheduleCardsContainer";

import {
	BrowserRouter as Router,
} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Schedule = () => {
		
	return (
		<Router>
		<div className="flex flex-row">
			<Header/>
			<Navbar path="/schedule" />	
			<ScheduleCardsContainer/>	
			<Footer/>	
		</div>
		</Router>
	);
};

export default Schedule