import Header from "../../components/Header";
import Navbar from "../../shared/components/Navbar";
import TableContainer from "../../components/TableContainer";
import AdminAddForm from "../../shared/components/AdminAddForm";
import { ADMINS_DATA } from "../../sampleData";
import SearchBox from "../../components/SearchBox";
import Admin from "../components/AdminIncharge";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { ADMIN, BASE_URL } from "../../urls";
import moment from "moment";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedAdminInfo, setSelectedAdminInfo] = useState({});

  const onRowSelect = (data) => {
    console.log("data", data);
    setSelectedAdminInfo(data);
  };

  useEffect(() => {
    axios
      .get(BASE_URL + ADMIN)
      .then((response) => {
        let admins = [];
        response.data.data.map((admin) => {
          let obj = {
            id: admin.id,
            name: admin.name,
            post: admin.superAdmin ? "Super Admin" : "Admin",
            phoneNo: admin.phoneNo,
            email: admin.email,
            regDate: moment(admin.dateRegistered)?.format("YYYY-MM-DD"),
          };
          admins.push(obj);
        });
        setAdmins(admins);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row">
        <Header />
        <Navbar path="/admins" />
      </div>

      <div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
        <div className="flex flex-row mt-12">
          <div className="flex-row grow px-1 mb-40">
            <TableContainer
              headings={ADMINS_DATA.HEADINGS}
              data={admins}
              onRowSelect={onRowSelect}
            />
          </div>

          <div className="flex-col items-center justify-items-center mb-60">
            <Admin selectedAdminInfo={selectedAdminInfo} />
            <AdminAddForm />
            <SearchBox />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admins;
