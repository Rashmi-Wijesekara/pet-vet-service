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
      <form>
        <text className="animalType"> Animal Type</text>
        {/* <textarea className="animalTypeTxtArea"> </textarea> */}
        <input type="text" className="animalTypeTxtArea"></input>

        <text className="breed"> Breed</text>
        {/* <textarea className="breedTxtArea"> </textarea> */}
        <input type="text" className="breedTxtArea"></input>
        <button className="btnAdd">Add</button>
      </form>
    </div>
  );
}

export default TreatingPatientCard;
