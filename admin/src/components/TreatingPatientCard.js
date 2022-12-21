import React from "react";

function TreatingPatientCard() {
  return (
    <div className="treatingPatientCardHolder">
      <text className="patientTxt">
        Treating Patients<br></br>
      </text>
      <text className="patient-txt-discription">
        What animal types and breeds will be treated
      </text>
      {/* <div className="animaltypyContainer"> */}

      <text className="animalType"> Animal Type</text>
      <textarea className="animalTypeTxtArea"> </textarea>

      <text className="breed"> Breed</text>
      <textarea className="breedTxtArea"> </textarea>
      <button className="btnAdd">Add</button>
    </div>
  );
}

export default TreatingPatientCard;
