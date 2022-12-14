import React from 'react';

import { ReactComponent as AdminProfile } from "../../assets/icons/patientCard.svg";

const PatientDetails = () => {

	

	return (
		<div className="font-main">
			<div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
				<div className="flex flex-col">
					<AdminProfile className="mx-auto w-[100px] -my-1" />
					<div className="font-main w-fit mx-20">
						<div className="font-bold">
							<li>ID</li>
							<li>Name</li>
							<li>Type</li>
							<li>Breed</li>
							<li>Gender</li>
                            <li>Registered Date</li>
                            <li>Birth Date</li>
							<li>Client ID</li>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientDetails;