import React, { useState } from "react";

import { ReactComponent as AdminProfile } from "../../assets/icons/clientCard.svg";

const ClientDetails = ({ selectedClientInfo }) => {
  const { id, name, pets, phoneNo, address } = selectedClientInfo;

  return (
    <div className="font-main">
      <div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
        <div className="flex flex-col">
          <AdminProfile className="mx-auto w-[100px] -my-0" />
          <div className="font-main w-fit mx-16 my-0">
            <div className="font-bold text-xs">
              {/* <li>ID</li>
              <li>Name</li>
              <li>Phone No.</li>
              <li>Email</li>
              <li>Address</li>
              <li>Pets</li> */}

              <li>{`ID - ${id}`}</li>
              <li>{`Name - ${name}`}</li>
              <li>{`Pets- ${pets}`}</li>
              <li>{`Phone No. - ${phoneNo}`}</li>
              {/* <li>{`Email - ${email}`}</li> */}
              <li>{`Address- ${address}`}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
