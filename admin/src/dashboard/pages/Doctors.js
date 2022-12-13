import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import DoctorAddForm from "../../shared/components/DoctorAddForm";
import * as sampleData from "../../sampleData";
import Doctor from "../components/DoctorIncharge";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import { DOCTORS_DATA } from "../../sampleData";
import TableContainer from "../../components/TableContainer";

const Doctors = () => {
  // const DoctorTitles = sampleData.DoctorTitles
  // const DoctorData = sampleData.DoctorData

  return (
    <Router>
      <div className="flex flex-row">
        <Navbar path="/doctors" />
        <Header />
        <SearchBox />
        <Footer />

        <div className="bg-background flex-grow pl-[270px] h-full">
          <div className="flex flex-row mt-40">
            <div className="grow px-6">
              <TableContainer
                headings={DOCTORS_DATA.HEADINGS}
                data={DOCTORS_DATA.DATA}
              />
            </div>
            <div className="flex-col items-center justify-items-center mx-5">
              <Doctor />
              <DoctorAddForm />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Doctors;
