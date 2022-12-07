import React, { useState } from "react";
import AdminHandle from "./AdminHandlePopup";

const AdminAddForm = () => {
	const [openAddAdmin, setOpenAddAdmin] =
		useState(false);


	// add a new Admin
	const AdminAddHandler = () => {
		setOpenAddAdmin(true);
	};

	

	return (
		<div>
			<div
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
					onClick={AdminAddHandler}
				>
					Add New Admin
				</div>
				<div
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Admin Log
				</div>
			
			
			{/* popup windows */}
			{openAddAdmin && (
				<AdminHandle
					btnName="Add Admin"
					closeAddAdmin={setOpenAddAdmin}
				/>
			)}
			
		</div>
	);
};
export default AdminAddForm;