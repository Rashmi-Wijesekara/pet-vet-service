import React from "react";

import Navbar from "../../shared/components/Navbar";

import Patient from "../components/PatientDetails";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import TableContainer from "../../components/TableContainer";
import { PATIENTS_DATA } from "../../sampleData";

const Patients = () => {
  //   const PatientTitles = sampleData.PatientTitles;
  //   const PatientData = sampleData.PatientData;

  return (
    <Router>
      <div className="flex flex-row">
        <Navbar path="/patients" />
        <Header />
        <SearchBox />
        <Footer />

        <TableContainer
          headings={PATIENTS_DATA.HEADINGS}
          data={PATIENTS_DATA.DATA}
        />

        <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
          <div className="flex flex-row mt-40">
            <div className="grow px-6">
              {/* <TableContainer
                headings={PATIENTS_DATA.HEADINGS}
                data={PATIENTS_DATA.DATA}
              /> */}
            </div>
            <div className="flex-col items-center justify-items-center mb-40">
              <Patient />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Patients;