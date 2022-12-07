// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Admins from "./dashboard/pages/Admins";
import StaffMembers from "./dashboard/pages/StaffMembers";
import Doctors from "./dashboard/pages/Doctors";
import Clients from "./dashboard/pages/Clients";
import Patients from "./dashboard/pages/Patients";
import Schedule from "./dashboard/pages/Schedule";
import Settings from "./dashboard/pages/Settings";
import Login from "./login/pages/Login";
import Dashboard from "./dashboard/pages/Dashboard";

function App() {
	return (
		<Router>
			<Switch>
			    <Route path="/" exact>
					<Login />
				</Route>
				<Route
					exact
					path="/dashboard"
					component={Dashboard}
				/>
				<Route
					exact
					path="/admins"
					component={Admins}
				/>
				<Route
					exact
					path="/staff-members"
					component={StaffMembers}
				/>
				<Route
					exact
					path="/doctors"
					component={Doctors}
				/>
				<Route
					exact
					path="/clients"
					component={Clients}
				/>
				<Route
					exact
					path="/patients"
					component={Patients}
				/>
				<Route
					exact
					path="/schedule"
					component={Schedule}
				/>
				<Route
					exact
					path="/settings"
					component={Settings}
				/>
				
				
				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;

