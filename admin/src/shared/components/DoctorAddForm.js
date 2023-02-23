import React, { useState } from "react";
import DoctorHandle from "./DoctorHandlePopup";

const DoctorAddForm = () => {
	const [openAddDoctor, setOpenAddDoctor] =
		useState(false);
	
	

	// add a new Doctor
	const DoctorAddHandler = () => {
		setOpenAddDoctor(true);
	};

	

	return (
		<div>
			<div
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite text-s py-1 px-1 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
					onClick={DoctorAddHandler}
				>
					Add New Doctor
				</div>
				
			
			
			
			{/* popup windows */}
			{openAddDoctor && (
				<DoctorHandle
					btnName="Add Doctor"
					closeAddDoctor={setOpenAddDoctor}
				/>
			)}
			
		</div>
	);
};
export default DoctorAddForm;