import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import * as sampleData from "../../sampleData";
import Client  from "../components/ClientDetails";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Doctors = () => {
	const ClientTitles = sampleData.ClientTitles
	const ClientData = sampleData.ClientData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/clients" />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
                <div className="flex flex-row mt-40">
                    <div className="grow px-6">
						<Table
							titles={ClientTitles}
							data={ClientData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<Client />
					   
					</div>
				</div>
			</div>
		</div>
		</Router>
	);
};

export default Doctors;