import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";


const Form = (props) => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

	// input fields are updated
	const handleTextInputChange = (event, id) => {
		if (id === 1) {
			setInput1(event.target.value);
		} else if (id === 2) {
			setInput2(event.target.value);
		}
	};

	// submit the form back to the parent component
	const formSubmit = () => {
		if (props.inputNames.length === 2) {
			if (input1.length > 0 && input2.length > 0) {
				props.onSubmit(input1, input2);
				setInput1("");
				setInput2("");
			}
		} else if (
			props.inputNames.length === 1 &&
			input1.length > 0
		) {
			props.onSubmit(input1);
			setInput1("");
		}
	};

	return (
		<div
			className="bg-white  font-second rounded-xl h-fit shadow-lg py-5 px-20 mx-10"
		>
			<div className="px-5 py-1">
			     <div className="text-center text-xl font-bold">
					Login
				 </div>
				
				{props.title && (
					<div className="text-center font-main font-semibold pb-8">
						{props.title}
					</div>
				)}

				{props.inputNames.map((input) => (
					<div className="" key={input.id}>
						<div className="text-textGrey rounded-lg">
							{input.name}
						</div>
						<input
							type={input.type}
							className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
							value={input.id === 1 ? input1 : input2}
							onChange={(event) =>
								handleTextInputChange(event, input.id)
							}
						/>
					</div>
				))}


				<div
					className="bg-btnBlue text-left  font-bold  text-white  py-4 px-0 
					rounded-xl my-5 mx-20 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
					onClick={formSubmit}
				> 

				


					<div className="flex flex-row ml-10">
						{props.btnName}
						<ArrowIcon />
					</div>			
				</div>
			</div>
		</div>
	);
};

export default Form;