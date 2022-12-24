import React from 'react';

import { ReactComponent as AdminProfile } from "../../assets/icons/clientCard.svg";

const ClientDetails = () => {

	

	return (
		<div className="font-main">
			<div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
				<div className="flex flex-col">
					<AdminProfile className="mx-auto w-[100px] -my-0" />
					<div className="font-main w-fit mx-16 my-0">
						<div className="font-bold text-xs">
							<li>ID</li>
							<li>Name</li>
							<li>Phone No.</li>
							<li>Email</li>
                            <li>Address</li>
							<li>Pets</li>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientDetails;