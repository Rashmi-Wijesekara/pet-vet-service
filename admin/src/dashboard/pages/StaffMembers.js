import React, { useEffect, useState } from "react";

import Navbar from "../../shared/components/Navbar";
import StaffAddForm from "../../shared/components/StaffAddForm";
import Staff from "../components/StaffIncharge";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import TableContainer from "../../components/TableContainer";
import { STAFF_MEMBER_DATA } from "../../sampleData";
import axios from "axios";
import { BASE_URL, STAFF } from "../../urls";

let initialData = [];

const StaffMembers = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [selectedStaffInfo, setSelectedStaffInfo] = useState({});

  const onRowSelect = (data) => {
    console.log("data", data);
    setSelectedStaffInfo(data);
  };
  useEffect(() => {
    axios
      .get(BASE_URL + STAFF)
      .then((response) => {
        let staffMembers = [];
        response.data.data.map((staffMember) => {
          let obj = {
            id: staffMember.id,
            name: staffMember.name,
            position: staffMember.position,
            phoneNo: staffMember.phoneNo,
            // email: admin.email,
            // regDate: moment(admin.dateRegistered)?.format("YYYY-MM-DD"),
          };
          staffMembers.push(obj);
        });
        setStaffMembers(staffMembers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <Navbar path="/staff-members" />
          <Header />
          <SearchBox
            initialData={initialData}
            tableData={staffMembers}
            setTableData={setStaffMembers}
          />
        </div>

        <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
          <div className="flex flex-row mt-12">
            <div className="flex-row grow px-1 mb-40">
              <TableContainer
                headings={STAFF_MEMBER_DATA.HEADINGS}
                data={staffMembers}
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
};

export default StaffMembers;
