import React from "react";

import Navbar from "../../shared/components/Navbar";
import DoctorAddForm from "../../shared/components/DoctorAddForm";
import Doctor  from "../components/DoctorIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Doctors = () => {
	

	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/doctors" />
		
			<div className="bg-background flex-grow pl-[270px] h-screen  overflow-y-auto">
                <div className="flex flex-row mt-40">
                    <div className="grow px-1 mb-40">
						
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