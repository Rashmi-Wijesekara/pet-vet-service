import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import StaffAddForm from "../../shared/components/StaffAddForm";
import * as sampleData from "../../sampleData";
import Staff  from "../components/StaffIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const StaffMembers = () => {
	const StaffTitles = sampleData.StaffTitles
	const StaffData = sampleData.StaffData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/staff-members" />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
                <div className="flex flex-row mt-40">
                    <div className="grow px-6">
						<Table
							titles={StaffTitles}
							data={StaffData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
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
