import React from "react";

import { ReactComponent as AdminProfile } from "../../assets/icons/adminCard.svg";

const AdminIncharge = ({ selectedAdminInfo }) => {
  const { id, name, post, phoneNo, email, regDate } = selectedAdminInfo;

  return (
    <div className="font-main">
      <div className="bg-white shadow-lg rounded-xl mx-5 pb-1">
        <div className=" flex-col">
          <AdminProfile className="mx-auto w-[100px] -my-0" />
          <div className="font-main w-fit mx-16 my-0">
            <div className="font-bold text-xs">
              <li>{`ID - ${id}`}</li>
              <li>{`Name - ${name}`}</li>
              <li>{`Position- ${post}`}</li>
              <li>{`Phone No. - ${phoneNo}`}</li>
              <li>{`Email - ${email}`}</li>
              <li>{`Registered Date - ${regDate}`}</li>
              {/* <li>Qualifications</li> */}
              {/* <li>Registered Date</li> */}
              {/* <li>Availability</li> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIncharge;
