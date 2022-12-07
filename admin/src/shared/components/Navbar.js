import React from "react";


// import icons in the navbar as components
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as AdminIcon } from "../../assets/icons/admin.svg";
import { ReactComponent as StaffIcon } from "../../assets/icons/staff.svg";
import { ReactComponent as DoctorIcon } from "../../assets/icons/doctor.svg";
import { ReactComponent as ClientIcon } from "../../assets/icons/clients.svg";
import { ReactComponent as PatientIcon } from "../../assets/icons/patient.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/schedule.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { useHistory } from "react-router-dom";
import NavbarButton from "./NavbarButton";

const Navbar = (props) => {

	const checkPath = props.path

	const history = useHistory();
  
	return (
		<div className="bg-white w-[250px] h-screen flex-none z-100 shadow-lg fixed">
			<div className="flex flex-row items-center w-fit mx-auto p-3">
				<LogoIcon className="mr-3" />
			</div>

			<div className="mx-auto w-fit flex-col space-y-3 my-1">
				{/* admins */}
				<NavbarButton onClick={()=> history.push("/admins")}
					name="Admins"
					path="/admins"
					currentPath={checkPath}
				>
					<AdminIcon />
				</NavbarButton> 

				{/* staff members */}
				<NavbarButton onClick={()=> history.push("/staff-members")}
					name="Staff Members"
					path="/staff-members"
					currentPath={checkPath}
				>
					<StaffIcon />
				</NavbarButton>

				{/* doctors */}
				<NavbarButton onClick={()=> history.push("/doctors")}
					name="Doctors"
					path="/doctors"
					currentPath={checkPath}
				>
					<DoctorIcon />
				</NavbarButton>

				{/* clients */}
				<NavbarButton onClick={()=> history.push("/clients")}
					name="Clients"
					path="/clients"
					currentPath={checkPath}
				>
					<ClientIcon />
				</NavbarButton>

				{/* patients */}
				<NavbarButton onClick={()=> history.push("/patients")}
					name="Patients"
					path="/patients"
					currentPath={checkPath}
				>
					<PatientIcon />
				</NavbarButton>

				{/* schedule */}
				<NavbarButton onClick={()=> history.push("/schedule")}
					name="Schedule"
					path="/schedule"
					currentPath={checkPath}
				>
					<ScheduleIcon />
				</NavbarButton>
			</div>

			<div className="">

					<div className="mx-auto w-fit mt-[40%]">

						{/* settings */}
						<NavbarButton onClick={()=> history.push("/settings")}
							name="Settings"
							path="/settings"
							currentPath={checkPath}
						>
							<SettingsIcon />
						</NavbarButton>

						{/* logout */}
						<NavbarButton onClick={()=> history.push("/logout")}
							name="Log out"
							path="/logout"
							currentPath={checkPath}
						>
							<LogoutIcon />
						</NavbarButton>
					</div>			
			</div>		
		</div>
	);
};

export default Navbar;