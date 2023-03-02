import React from "react";

import Navbar from "../../shared/components/Navbar";

import Client  from "../components/ClientDetails";


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableContainer from "../../components/TableContainer";
import SearchBox from "../../components/SearchBox";
import { CLIENTS_DATA } from "../../sampleData";

const Clients = () => {
	// const ClientTitles = sampleData.ClientTitles
	// const ClientData = sampleData.ClientData


	return (
		<>
		<div className="flex flex-row">
			<Navbar path="/clients" />
			<Header/>
		</div>
			
		
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
                <div className="flex flex-row mt-12">
                    <div className="flex-row grow px-1 mb-40">
					<TableContainer
					headings={CLIENTS_DATA.HEADINGS}
					data={CLIENTS_DATA.DATA}
					/>
						
					</div>
					<div className="flex-col items-center justify-items-center mb-60">
						<Client />
						<SearchBox />
					   
					</div>
					
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Clients;