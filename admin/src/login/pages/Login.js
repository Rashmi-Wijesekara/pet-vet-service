import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LoginImage } from "../../assets/images/login.svg";
import LoginForm from "../components/LoginForm"
import auth from "../../shared/Auth";

const Login = () => {
	let history = useHistory();

	const loginHandler = (id, pswd) => {
		auth.login(() => {
			history.push("/dashboard")
		}, id, pswd)
	}	

	return (
		<div className="bg-background flex-grow pl-[270px] w-xl h-screen">

			
			<div className="flex flex-col ">

				<div className="mx-auto ">	
					<div className="font-main font-semibold text-center my-5 mx-20 ">
						<div className="text-2xl text-TextTitle">Welcome to PetVet Clinic</div>
						<div className="text-2xl mt-2 text-TextTitle">Admin Site</div>
					</div>
					<LoginForm loginHandler={loginHandler}/>
				</div>

					<div
						className="bg-white max-w-sm font-second rounded-xl h-fit shadow-lg px-2 py-2 
						transform duration-300 hover:scale-105 mb-50">
						<LoginImage className=" mx-auto w-[200px] h-fit py-8" />
					</div>
			
			</div>
				
			
		</div>
	);
};

export default Login;