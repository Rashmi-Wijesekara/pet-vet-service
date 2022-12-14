import React from "react";

import Navbar from "../../shared/components/Navbar";
import AdminAddForm from "../../shared/components/AdminAddForm";
import Admin  from "../components/AdminIncharge";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Admins = () => {
	


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/admins" />
		
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
                <div className="flex flex-row mt-40">

                    <div className="flex-row grow px-1 mb-40">
						
						

					</div>
					
					

					<div className="flex-col items-center justify-items-center mx-5 ">
						
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
