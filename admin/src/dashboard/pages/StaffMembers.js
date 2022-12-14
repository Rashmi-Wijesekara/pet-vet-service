import React from "react";

import Navbar from "../../shared/components/Navbar";
import StaffAddForm from "../../shared/components/StaffAddForm";
import Staff  from "../components/StaffIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const StaffMembers = () => {
	


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/staff-members" />
		
			<div className="bg-background flex-grow pl-[270px] h-screen  overflow-y-auto">
                <div className="flex flex-row mt-40">
                    <div className="grow px-1 mb-40">
						
					</div>
					<div className="flex-col items-center justify-items-center mx-5">
						<Staff />
						<StaffAddForm />
						
						
					</div>
				</div>
			</div>
		</div>

		

		</Router>
	);
};

export default StaffMembers;
