import React, { useEffect, useState } from "react";

import Navbar from "../../shared/components/Navbar";
import DoctorAddForm from "../../shared/components/DoctorAddForm";
import Doctor from "../components/DoctorIncharge";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";
import { DOCTORS_DATA } from "../../sampleData";
import TableContainer from "../../components/TableContainer";
import axios from "axios";
import { BASE_URL, DOCTOR } from "../../urls";
import moment from "moment";

let initialData = [];
const Doctors = () => {
  // const DoctorTitles = sampleData.DoctorTitles
  // const DoctorData = sampleData.DoctorData
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorInfo, setSelectedDoctorInfo] = useState({});

  const onRowSelect = (data) => {
    console.log("data", data);
    setSelectedDoctorInfo(data);
  };

  useEffect(() => {
    axios
      .get(BASE_URL + DOCTOR)
      .then((response) => {
        let doctors = [];
        response.data.data.map((doctor) => {
          let obj = {
            id: doctor.id,
            name: doctor.name,
            phoneNo: doctor.phoneNo,
            email: doctor.email,
            qualifications: doctor.qualifications,
            regDate: moment(doctor.dateRegistered)?.format("YYYY-MM-DD"),
            availability: doctor.availability,
          };
          doctors.push(obj);
        });
        setDoctors(doctors);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Navbar path="/doctors" />
        <Header />
      </div>

      <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
        <div className="flex flex-row mt-12">
          <div className="flex-row grow px-1 mb-40">
            <TableContainer
              headings={DOCTORS_DATA.HEADINGS}
              data={doctors}
              onRowSelect={onRowSelect}
            />
          </div>
          <div className="flex-col items-center justify-items-center mb-60 ">
            <Doctor selectedDoctorInfo={selectedDoctorInfo} />
            <DoctorAddForm />
            <SearchBox
              initialData={initialData}
              tableData={doctors}
              setTableData={setDoctors}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
