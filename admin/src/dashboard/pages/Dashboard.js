import React from "react";

import Navbar from "../../shared/components/Navbar";
import CurrentStatus from "../components/CurrentStatus";


import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Dashboard = () => {
		
	return (
		<>
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<Header/>
			<Footer/>
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
			
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">		
				</div>
				<div className="text-2xl text-NavbarTextCol font-bold my-20">Dashboard</div>
				<div className="flex flex-row mt-4">
					<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">
						<CurrentStatus />
					</div>	
				</div>
				
			</div>			
		</div>
		</>
	);
};

export default Dashboard;