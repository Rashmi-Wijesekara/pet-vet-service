import React, { useState } from "react";

import Form from "../../shared/components/Form";
import auth from "../../shared/Auth";

const LoginForm = (props) => {
	const [error, setError] = useState("");

	const InputNames = [
		{ id: 1, name: "Email", type: "text" },
		{ id: 2, name: "Password", type: "password" },
	];
	const {id,pswd} = auth.getLoginData()

	// check for id and password
	const formSubmitHandler = (input1, input2) => {
		if (input1 === id && input2 === pswd) {
			console.log("successfully logged-in");
			setError("");
			props.loginHandler(input1, input2);
		} 
		else {
			console.log("wrong Email & password");
			setError("Invalid Email & Password");
		}
	};

	return (
		<div className="max-w-xl mx-auto mt-5">
			{error && (
				<div className="bg-red-400 rounded-lg text-textInput my-3 text-center font-semibold font-second">
					{error}
				</div>
			)}
			<Form
				inputNames={InputNames}
				btnName="Login"
				loginStatus={true}
                onSubmit={formSubmitHandler}
                dashboardPathTo={"/dashboard"}
			/>
		</div>
	);
};

export default LoginForm;