import React , { useState } from 'react';
import axios from "axios";
import { STAFF, BASE_URL } from "../../urls";


const StaffHandlePopup = (props) => {
	const type = props.btnName

	const [staff, setStaff] = useState({
		name:'',
		email: '',
		phoneNo: '',
		password: '',
		position: ''
	})

	// add or remove a Staff
	const saveStaffUpdate = (event) => {
		// send data back to the database

		const {name, value} = event.target;

		setStaff(prevStaff => {
			return {
				...prevStaff,
				[name]: value
			}
		})
	}

	const handleClick = (event) => {
		event.preventDefault();
		// console.log(admin);
		const newStaff = {
			name: staff.name,
			email: staff.email,
			phoneNo: staff.phoneNo,
			password: staff.password,
			position: staff.position
		}

		axios.post(BASE_URL + STAFF, newStaff)
	}

	// close the modal when cancel button is clicked
	const closeModalHandler = () => {
		if (type === "Add Staff") {
			props.closeAddStaff(false);
		} else if (type === "Remove Staff") {
			props.closeRemoveStaff(false);
		}
	}

	return (
		<div
			className={`fixed flex justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full`}
			id="my-modal"
		>
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-8 rounded-xl shadow-xl`}
				id="modal"
			>

				<div className="text-textGrey text-md">
					Name :
				</div>
				<input
					type="text"
					onChange={saveStaffUpdate}
					name= "name"
					value={staff.name}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Email :
				</div>
				<input
					type="text"
					onChange={saveStaffUpdate}
					name= "email"
					value={staff.email}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Phone :
				</div>
				<input
					type="text"
					onChange={saveStaffUpdate}
					name= "phoneNo"
					value={staff.phoneNo}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Password :
				</div>
				<input
					type="text"
					onChange={saveStaffUpdate}
					name= "password"
					value={staff.password}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Position :
				</div>
				<input
					type="text"
					onChange={saveStaffUpdate}
					name= "position"
					value={staff.position}
					autoComplete="off"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div
					onClick={handleClick}
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-3 px-10 rounded-xl my-5 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Add New Staff Member
				</div>

				<div
					onClick={closeModalHandler}
					className="bg-navbarBgGrey mx-auto font-second w-fit text-navbarLogoText py-2 px-6 rounded-xl my-2 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Cancel
				</div>
			</div>
		</div>
	);
}

export default StaffHandlePopup;