import React, { useContext } from "react";
import { ReactComponent as LogoutImage } from "../../assets/images/logout.svg";
import Navbar from "../../shared/components/Navbar";
import { AuthContext } from "../../shared/AuthContext";
import FormCard from "../../shared/components/FormCard";

import {
	BrowserRouter as Router,
} from "react-router-dom";


const Logout = () => {

    const auth = useContext(AuthContext);

	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/logout" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="mx-auto mt-40">
					<LogoutImage className=" mx-auto w-[200px] h-fit py-3" />

					<FormCard className="rounded-lg mt-5 w-full h-full">
                        <div className="font-main text-sxm text-center font-bold mb-6">Are you sure that you want to log out from Admin Site?</div>
                            <div className="flex flex-row gap-2">
                            <div className="bg-red-400 mx-auto font-second w-fit
                                            text-navbarTextCol font-bold py-2 px-6 rounded-xl my-5
                                             cursor-pointer shadow-md hover:shadow-xl 
                                             transform duration-300 active:translate-y-2">
					            Cancel
				            </div>
                            <div className="bg-mainBlue mx-auto font-second w-fit
                                            text-navbarTextCol font-bold py-2 px-6 rounded-xl my-5
                                             cursor-pointer shadow-md hover:shadow-xl 
                                             transform duration-300 active:translate-y-2">
					            Logout
				            </div>
                            </div>
                        
                    </FormCard>
				</div>
			</div>
		</div>

		

		</Router>
	);
};

export default Logout;
