import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import AdminAddForm from "../../shared/components/AdminAddForm";
import * as sampleData from "../../sampleData";
import Admin  from "../components/AdminIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Admins = () => {
	const AdminTitles = sampleData.AdminTitles
	const AdminData = sampleData.AdminData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/admins" />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
                <div className="flex flex-row mt-40">
                    <div className="grow px-1">
						<Table
							titles={AdminTitles}
							data={AdminData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-5">
						<Admin />
						<AdminAddForm />
						
						
					</div>
				</div>
			</div>
		</div>
		</Router>
	);
};

export default Admins;
