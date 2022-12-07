import React from "react";

import Navbar from "../../shared/components/Navbar";


import {
	BrowserRouter as Router,
} from "react-router-dom";


const Schedule = () => {
		
	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/schedule" />			
		</div>
		</Router>
	);
};

export default Schedule