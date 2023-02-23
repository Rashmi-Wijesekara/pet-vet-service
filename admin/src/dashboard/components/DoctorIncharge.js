import React from 'react';

import { ReactComponent as AdminProfile } from "../../assets/icons/doctorCard.svg";

const DoctorIncharge = () => {


	return (
		<div className="font-main">
			<div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
				<div className="flex flex-col">
					<AdminProfile className="mx-auto w-[100px] -my-0" />
					<div className="font-main w-fit mx-16 my-0">
						<div className="font-bold text-xs">
							<li>Register ID</li>
							<li>Name</li>
							<li>Phone No.</li>
							<li>Email</li>
                            <li>Qualifications</li>
							<li>Registered Date</li>
                            <li>Availability</li>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default DoctorIncharge;