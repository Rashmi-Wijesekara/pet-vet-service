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
		<div className="bg-background h-screen  overflow-y-auto">

					<div className="font-main font-semibold text-center my-[30px] mx-15 ">
						<div className="text-2xl text-TextTitle">Welcome to PetVet Clinic</div>
						<div className="text-2xl mt-2 text-TextTitle">Admin Site</div>
					</div>
			
				<div className="flex-col ">

					<div className="flex-row ">	
					
						<div className="flex-row ml-60">
							<LoginForm loginHandler={loginHandler}/>
						</div>
						<div
							className="flex-row bg-white max-w-sm font-second rounded-xl h-70 drop-shadow-lg px-0 py-2 my-[-330px] mx-[180px] ">
							<LoginImage className=" mx-auto w-[350px] h-fit py-8" />
						</div>
						
						
					</div>

					
			
				</div>
		
		
		</div>
	);
};

export default Login;