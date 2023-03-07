import React, { useEffect, useState } from "react";

import Navbar from "../../shared/components/Navbar";

import Client from "../components/ClientDetails";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableContainer from "../../components/TableContainer";
import SearchBox from "../../components/SearchBox";
import { CLIENTS_DATA } from "../../sampleData";
import axios from "axios";
import { BASE_URL, CLIENT } from "../../urls";

let initialData = [];

const Clients = () => {
  // const ClientTitles = sampleData.ClientTitles
  // const ClientData = sampleData.ClientData
  const [clients, setClients] = useState([]);
  const [selectedClientInfo, setSelectedClientInfo] = useState({});

  const onRowSelect = (data) => {
    console.log("data", data);
    setSelectedClientInfo(data);
  };

  useEffect(() => {
    axios
      .get(BASE_URL + CLIENT)
      .then((response) => {
        let clients = [];
        response.data.data.map((client) => {
          let obj = {
            id: client.id,
            name: client.name,
            pets: client.pets,
            phoneNo: client.phoneNo,
            address: client.address,
          };
          clients.push(obj);
        });
        setClients(clients);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-row">
        <Navbar path="/clients" />
        <Header />
      </div>

      <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
        <div className="flex flex-row mt-12">
          <div className="flex-row grow px-1 mb-40">
            <TableContainer
              headings={CLIENTS_DATA.HEADINGS}
              data={clients}
              onRowSelect={onRowSelect}
            />
          </div>
          <div className="flex-col items-center justify-items-center mb-60">
            <Client selectedClientInfo={selectedClientInfo} />
            <SearchBox
              initialData={initialData}
              tableData={clients}
              setTableData={setClients}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;
