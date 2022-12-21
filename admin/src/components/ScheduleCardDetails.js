import React from "react";
import CatIcon from "../icons/cat-icon.svg";

function ScheduleCardDetails(props) {
  return (
    <div>
      <div className="scheduleDetails">
        {/* <div className="detailLeft">Client:Vishvi De Silva</div>
        <div className="detailRight">Doctor:Rashmi Wijesekara</div> */}

        <div className="detailLeft">Client:{props.clientName}</div>
        <div className="detailRight">Doctor:{props.doctorName}</div>

        <img src={CatIcon} alt="catIcon" id="detailCatIcon"></img>
      </div>
    </div>
  );
}

export default ScheduleCardDetails;
