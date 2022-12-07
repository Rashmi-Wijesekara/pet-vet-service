import React, { useState } from "react";
import StaffHandle from "./StaffHandlePopup";

const StaffAddForm = () => {
	const [openAddStaff, setOpenAddStaff] =
		useState(false);
	

	

	// add a new Staff
	const StaffAddHandler = () => {
		setOpenAddStaff(true);
	};

	

	return (
		<div>
			<div
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
					onClick={StaffAddHandler}
				>
					Add New Staff Member
				</div>
				
			
			
			
			{/* popup windows */}
			{openAddStaff && (
				<StaffHandle
					btnName="Add Staff"
					closeAddStaff={setOpenAddStaff}
				/>
			)}
			
		</div>
	);
};
export default StaffAddForm;