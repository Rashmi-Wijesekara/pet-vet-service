import React from 'react';


import { ReactComponent as NewDoctorIcon } from "../../assets/icons/newDoctor.svg";
import { ReactComponent as NewClientIcon } from "../../assets/icons/newClient.svg";
import { ReactComponent as NewPatientIcon } from "../../assets/icons/newPatient.svg";
import { ReactComponent as NewMemberIcon } from "../../assets/icons/newMember.svg";


const CurrentStatus = () => {
	return (
		<div className="font-main mt-0 w-fit mx-auto">
			<div className='flex flex-row flex-grow pl-[10px] pt-[10px] w-screen'>
				<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
					<div className="flex flex-col">
						<div className="py-5 px-10 mt-0">
							<div className="text-navbarTextCol font-semibold">
								Patients
							</div>
						</div>
						<div className='flex flex-row'>
							<div className="">
								<NewPatientIcon />
							</div>
							<div className="font-bold text-3xl mx-20 text-navbarTextCol">76</div>
						</div>
						
					</div>
				</div>

				<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
					<div className="flex flex-col">
						<div className="py-5 px-10 mt-0">
							<div className="text-navbarTextCol font-semibold">
								Clients
							</div>
						</div>
						<div className='flex flex-row'>
							<div className="">
								<NewClientIcon />
							</div>
							<div className="font-bold text-3xl mx-20 text-navbarTextCol">65</div>
						</div>
						
					</div>
				</div>

				<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
					<div className="flex flex-col">
						<div className="py-5 px-10 mt-0">
							<div className="text-navbarTextCol font-semibold">
								Doctors
							</div>
						</div>
						<div className='flex flex-row'>
							<div className="">
								<NewDoctorIcon />
							</div>
							<div className="font-bold text-3xl mx-20 text-navbarTextCol">4</div>
						</div>
						
					</div>
				</div>

				<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
					<div className="flex flex-col">
						<div className="py-5 px-10 mt-0">
							<div className="text-navbarTextCol font-semibold">
								Staff Members
							</div>
						</div>
						<div className='flex flex-row'>
							<div className="">
								<NewMemberIcon />
							</div>
							<div className="font-bold text-3xl mx-20 text-navbarTextCol">12</div>
						</div>
						
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default CurrentStatus;