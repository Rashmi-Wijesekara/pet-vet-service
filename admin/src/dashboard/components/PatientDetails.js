import React from "react";

import { ReactComponent as AdminProfile } from "../../assets/icons/patientCard.svg";

const PatientDetails = ({ selectPatientInfo }) => {
  const { id, type, name, breed, clientID } = selectPatientInfo;

  return (
    <div className="font-main">
      <div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
        <div className="flex flex-col">
          <AdminProfile className="mx-auto w-[100px] -my-0" />
          <div className="font-main w-fit mx-16 my-0">
            <div className="font-bold text-xs">
              <li>{`ID - ${id}`}</li>
              <li>{`Type- ${type}`}</li>
              <li>{`Name - ${name}`}</li>
              <li>{`Breed- ${breed}`}</li>
              <li>{`ClientID - ${clientID}`}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
