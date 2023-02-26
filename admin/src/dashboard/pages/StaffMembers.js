import React, { useState } from "react";

import Navbar from "../../shared/components/Navbar";
import StaffAddForm from "../../shared/components/StaffAddForm";
import Staff from "../components/StaffIncharge";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import TableContainer from "../../components/TableContainer";
import { STAFF_MEMBER_DATA } from "../../sampleData";

const StaffMembers = () => {
  const [selectedStaffInfo, setSelectedStaffInfo] = useState({});

  const onRowSelect = (data) => {
    setSelectedStaffInfo(data);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <Navbar path="/staff-members" />
          <Header />
          <SearchBox />
        </div>

        <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
          <div className="flex flex-row mt-12">
            <div className="flex-row grow px-1 mb-40">
              <TableContainer
                headings={STAFF_MEMBER_DATA.HEADINGS}
                data={STAFF_MEMBER_DATA.DATA}
                onRowSelect={onRowSelect}
              />
            </div>
            <div className="flex-col items-center justify-items-center  mb-60">
              <Staff selectedStaffInfo={selectedStaffInfo} />
              <StaffAddForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );

  // return (
  //   <Router>
  //     <div className="flex flex-row">
  //       <div className="flex flex-row">
  //         <Navbar path="/staff-members" />
  //         <Header />
  //         <SearchBox />
  //       </div>

  //       <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
  //         <div className="flex flex-row mt-40">
  //           <div className="flex-row grow px-1 mb-40">
  //             <TableContainer
  //               headings={STAFF_MEMBER_DATA.HEADINGS}
  //               data={STAFF_MEMBER_DATA.DATA}
  //             />

  //           </div>
  //           <div className="flex-col items-center justify-items-center  mb-60">
  //             <Staff />
  //             <StaffAddForm />

  //           </div>
  //         </div>

  //       </div>
  //     </div>

  //     <Footer />
  //   </Router>
  // );
};

export default StaffMembers;
