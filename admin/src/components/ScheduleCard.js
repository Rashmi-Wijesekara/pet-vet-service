import React from "react";
import ScheduleCardDetails from "./ScheduleCardDetails";


function ScheduleCard() {
  return (
    <div className="scheduleCard">
      <ScheduleCardDetails clientName="Vishvi De Silva" doctorName="Rashmi Wijesekara"/>
      <ScheduleCardDetails clientName="Laksisi Gunarathne" doctorName="Amila Jayasekara"/>

      
    </div>
  );
}

export default ScheduleCard;
