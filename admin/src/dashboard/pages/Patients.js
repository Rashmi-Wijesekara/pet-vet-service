import React, { useEffect, useState } from "react";

import Navbar from "../../shared/components/Navbar";

import Patient from "../components/PatientDetails";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import TableContainer from "../../components/TableContainer";
import { PATIENTS_DATA } from "../../sampleData";
import axios from "axios";
import { BASE_URL, PATIENT } from "../../urls";

let initialData = [];
const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [seletedPatientInfo, setSelectedPatientInfo] = useState({});

  const onRowSelect = (data) => {
    console.log("data", data);
    setSelectedPatientInfo(data);
  };

  useEffect(() => {
    axios
      .get(BASE_URL + PATIENT)
      .then((response) => {
        let patients = [];
        response.data.data.map((patient) => {
          let obj = {
            id: patient.id,
            type: patient.type,
            name: patient.name,
            breed: patient.breed,
            clientID: patient.client,
          };
          patients.push(obj);
        });
        setPatients(patients);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Navbar path="/patients" />
        <Header />
        <SearchBox
          initialData={initialData}
          tableData={patients}
          setTableData={setPatients}
        />
        <Footer />

        <TableContainer
          headings={PATIENTS_DATA.HEADINGS}
          data={patients}
          onRowSelect={onRowSelect}
        />

        <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
          <div className="flex flex-row mt-12">
            <div className="grow px-6">
              {/* <TableContainer
                headings={PATIENTS_DATA.HEADINGS}
                data={PATIENTS_DATA.DATA}
              /> */}
            </div>
            <div className="flex-col items-center justify-items-center mt-0 mb-60">
              <Patient selectPatientInfo={seletedPatientInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
