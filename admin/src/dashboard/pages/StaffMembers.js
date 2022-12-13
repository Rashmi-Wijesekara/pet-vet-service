import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import StaffAddForm from "../../shared/components/StaffAddForm";
import * as sampleData from "../../sampleData";
import Staff from "../components/StaffIncharge";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import TableContainer from "../../components/TableContainer";
import { STAFF_MEMBER_DATA } from "../../sampleData";

const StaffMembers = () => {
  return (
    <Router>
      <div className="flex flex-row">
        <Navbar path="/staff-members" />
        <Header />
        <SearchBox />
        <Footer />

        <div className="bg-background flex-grow pl-[270px] h-full">
          <div className="flex flex-row mt-40">
            <div className="grow px-6">
              {/* <Table titles={StaffTitles} data={StaffData} /> */}
              <TableContainer
                headings={STAFF_MEMBER_DATA.HEADINGS}
                data={STAFF_MEMBER_DATA.DATA}
              />
            </div>
            <div className="flex-col items-center justify-items-center mx-10">
              <Staff />
              <StaffAddForm />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default StaffMembers;
