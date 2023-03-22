import React , { useState } from 'react';
import axios from "axios";
import { DOCTOR, BASE_URL } from "../../urls";

const DoctorHandlePopup = (props) => {
	const type = props.btnName

	const [doctor, setDoctor] = useState({
		id:'',
		name: '',
		phoneNo: '',
		email: '',
		address: '',
		qualifications: '',
		password: ''
	})

	// add or remove a Doctor
	const saveDoctorUpdate = (event) => {
		// send data back to the database

		const {name, value} = event.target;

		setDoctor(prevDoctor => {
			return {
				...prevDoctor,
				[name]: value
			}
		})
	}

	const handleClick = (event) => {
		event.preventDefault();
		// console.log(admin);
		const newDoctor = {
			id: doctor.id,
			name: doctor.name,
			phoneNo: doctor.phoneNo,
			email: doctor.email,
			address: doctor.address,
			qualifications: doctor.qualifications,
			password: doctor.password,
			
		}

		axios.post(BASE_URL + DOCTOR, newDoctor)
	}

	// close the modal when cancel button is clicked
	const closeModalHandler = () => {
		if (type === "Add Doctor") {
			props.closeAddDoctor(false);
		} else if (type === "Remove Doctor") {
			props.closeRemoveDoctor(false);
		}
	}

	return (
		<div
			className={`fixed flex justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full`}
			id="my-modal"
		>
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-5 rounded-xl shadow-xl`}
				id="modal"
			>
				<div className="text-textGrey text-md">
					Id :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "id"
					value={doctor.id}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>
				
				<div className="text-textGrey text-md">
					Name :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "name"
					value={doctor.name}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Phone :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "phoneNo"
					value={doctor.phoneNo}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>	

				<div className="text-textGrey text-md">
					Email :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "email"
					value={doctor.email}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Address :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "address"
					value={doctor.address}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Qualifications :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "qualifications"
					value={doctor.qualifications}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>	

				<div className="text-textGrey text-md">
					Password :
				</div>
				<input
					type="text"
					onChange={saveDoctorUpdate}
					name= "password"
					value={doctor.password}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-2 mb-3 h-8 px-3 py-2"
				/>	

				<div
					onClick={handleClick}
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-1 px-10 rounded-xl my-2 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Add New Doctor
				</div>

				<div
					onClick={closeModalHandler}
					className="bg-navbarBgGrey mx-auto font-second w-fit text-navbarLogoText py-1 px-6 rounded-xl my-1 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Cancel
				</div>
			</div>
		</div>
	);
}

export default DoctorHandlePopup;