import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import DoctorAddForm from "../../shared/components/DoctorAddForm";
import * as sampleData from "../../sampleData";
import Doctor  from "../components/DoctorIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Doctors = () => {
	const DoctorTitles = sampleData.DoctorTitles
	const DoctorData = sampleData.DoctorData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/doctors" />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
                <div className="flex flex-row mt-40">
                    <div className="grow px-6">
						<Table
							titles={DoctorTitles}
							data={DoctorData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-5">
						<Doctor />
						<DoctorAddForm />
						
						
					</div>
				</div>
			</div>
		</div>
		</Router>
	);
};

export default Doctors;