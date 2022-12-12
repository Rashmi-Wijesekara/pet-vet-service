import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import * as sampleData from "../../sampleData";
import Patient  from "../components/PatientDetails";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Patients = () => {
	const PatientTitles = sampleData.PatientTitles
	const PatientData = sampleData.PatientData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/patients" />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
                <div className="flex flex-row mt-40">
                    <div className="grow px-6">
						<Table
							titles={PatientTitles}
							data={PatientData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<Patient />
					   
					</div>
				</div>
			</div>
		</div>
		</Router>
	);
};

export default Patients;