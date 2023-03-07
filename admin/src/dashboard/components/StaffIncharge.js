import React from "react";

import { ReactComponent as AdminProfile } from "../../assets/icons/staffCard.svg";

const StaffIncharge = ({ selectedStaffInfo }) => {
  const { id, name, position, phoneNo } = selectedStaffInfo;

  return (
    <div className="font-main">
      <div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
        <div className="flex flex-col">
          <AdminProfile className="mx-auto w-[100px] -my-0" />
          <div className="font-main w-fit  mx-16 my-0">
            <div className="font-bold text-xs">
              <li>{`ID - ${id}`}</li>
              <li>{`Name - ${name}`}</li>
              <li>{`Position - ${position}`}</li>
              <li>{`Phone No. - ${phoneNo}`}</li>
              {/* <li>{`Email - ${email}`}</li> */}
              {/* <li>{`Registered Date - ${regDate}`}</li> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffIncharge;
