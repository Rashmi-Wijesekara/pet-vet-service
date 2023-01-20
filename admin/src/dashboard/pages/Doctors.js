import React from "react";

import Navbar from "../../shared/components/Navbar";
import DoctorAddForm from "../../shared/components/DoctorAddForm";
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
      </div>

        <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
          <div className="flex flex-row mt-12">
            <div className="flex-row grow px-1 mb-40">
              <TableContainer
                headings={DOCTORS_DATA.HEADINGS}
                data={DOCTORS_DATA.DATA}
              />
            </div>
            <div className="flex-col items-center justify-items-center mb-60 ">
              <Doctor />
              <DoctorAddForm />
              <SearchBox />
            </div>
          </div>
        </div>
        <Footer />
    </Router>
  );
};

export default Doctors;