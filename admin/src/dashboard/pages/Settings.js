import React from "react";

import Navbar from "../../shared/components/Navbar";


import {
	BrowserRouter as Router,
} from "react-router-dom";


const Settings = () => {
		
	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/settings" />			
		</div>
		</Router>
	);
};

export default Settings