import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
// import * as sampleData from "../../sampleData";
import Client  from "../components/ClientDetails";

import {
	BrowserRouter as Router,
} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableContainer from "../../components/TableContainer";
import SearchBox from "../../components/SearchBox";
import { CLIENTS_DATA } from "../../sampleData";

const Doctors = () => {
	// const ClientTitles = sampleData.ClientTitles
	// const ClientData = sampleData.ClientData


	return (
		<Router>
		<div className="flex flex-row">
			<Navbar path="/clients" />
			<Header/>
			{/* <SearchBox/> */}
			<Footer/> 
			<TableContainer
          headings={CLIENTS_DATA.HEADINGS}
          data={CLIENTS_DATA.DATA}
        />
		
			<div className="bg-background flex-grow pl-[270px] h-full">
			<SearchBox/>
		


                <div className="flex flex-row mt-40">
                    <div className="grow px-6">
					
						
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<Client />
					   
					</div>
					
				</div>
			</div>
		</div>
		</Router>
	);
};

export default Doctors;